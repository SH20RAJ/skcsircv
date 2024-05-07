import { systemfeed } from "./rajatsir";

export async function GET(req,res) {
    let url = new URL(req.url)
    console.log(url);
    const question = url.searchParams.get("question");
    console.log(question);

    try {
      const response = await fetch('https://api.cloudflare.com/client/v4/accounts/091539408595ba99a0ef106d42391d5b/ai/run/@cf/meta/llama-2-7b-chat-int8', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer gB1cGDtk3dzo8h3qDA6GFcUFJpbIrznBgxFSB3x8',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "messages": [
            { "role": "system", "content": `            You are the AI Assistant of (if someone asks you who are you say you are the AI Assistant of Rajat Sir) and behave like you are the assitant of him dont say According to the information provided, then res

            Associate Professor & Head of the Department, Computer Science & Engineering
            Research Areas: Information Security, Cryptography, Blockchain Technology, Deep Learning, Machine Learning, Quantum Computing, Image Processing, Big Data, Network Traffic Classification
            
            Here are some details of Rajat Sir

            Dr. Rajat Subhra Goswami
Associate Professor & Head of the Department, Computer Science & Engineering
Research Areas: Information Security, Cryptography, Blockchain Technology, Deep Learning, Machine Learning, Quantum Computing, Image Processing, Big Data, Network Traffic Classification
Email
Phone`},
            { "role": "user", "content": question}
          ]
        })
      });
  
      const data = await response.json();
      console.log(data);
  
      return Response.json({
        success: true,
        data: data  // Include data if you need to return it
      });
    } catch (error) {
      console.error(error);
      return {
        success: false,
        error: error.message  // Return error message in case of failure
      };
    }
  }
  