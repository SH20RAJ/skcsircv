import { search, user } from "scholarly";

// https://scholar.google.com/citations?user=-61STa0AAAAJ&hl=en

export async function GET(req,res){
// console.log(search("machine learning"));

// console.log(user("H18-9fkAAAAJ"));

let data = await user("-61STa0AAAAJ");

// console.log(data);

    return Response.json({
        success: true,
        data: data 
    })
}