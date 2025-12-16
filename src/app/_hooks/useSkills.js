import { useEffect, useRef, useState } from "react";
import { skills } from "../_data/skills";

export function useSkills() {
    const [skillPosition, setSkillPosition] = useState(0);
    const [fade, setFade] = useState(true);
    const [autoSlide, setAutoSlide] = useState(true);
    const skillsRef = useRef(null);

    const maxLength = skills.length;

    function decreaseSkillPosition() {
        if (skillPosition === 0) return;
        setAutoSlide(false);
        setFade(false);
        setTimeout(() => {
            setSkillPosition((pos) => pos - 1);
            setFade(true);
        }, 200);
    }

    function increaseSkillPosition() {
        if (skillPosition === maxLength - 1) {
            setSkillPosition(0);
            return;
        }
        setAutoSlide(false);
        setFade(false);
        setTimeout(() => {
            setSkillPosition((pos) => pos + 1);
            setFade(true);
        }, 200);
    }

    useEffect(() => {
        if (!autoSlide) return;
        const timer = setTimeout(() => {
            if (skillPosition < maxLength - 1) {
                setFade(false);
                setTimeout(() => {
                    setSkillPosition((pos) => pos + 1);
                    setFade(true);
                }, 200);
            }
        }, 3000);
        return () => clearTimeout(timer);
    }, [skillPosition, maxLength, autoSlide]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setAutoSlide(true);
                } else {
                    setAutoSlide(false);
                }
            },
            { threshold: 0.4 }
        );

        if (skillsRef.current) observer.observe(skillsRef.current);

        return () => {
            if (skillsRef.current) observer.unobserve(skillsRef.current);
        };
    }, []);

    const Icon = skills[skillPosition].icon;

    return { decreaseSkillPosition, increaseSkillPosition, Icon, maxLength, skillsRef, fade, skillPosition };

}