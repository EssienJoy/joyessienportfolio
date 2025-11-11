import { projects } from "@/app/api/projects/projects";


export async function GET(request,) {
    return Response.json(projects);
}