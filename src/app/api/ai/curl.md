curl -X POST \              
  https://api.cloudflare.com/client/v4/accounts/091539408595ba99a0ef106d42391d5b/ai/run/@cf/meta/llama-2-7b-chat-int8 \
  -H "Authorization: Bearer gB1cGDtk3dzo8h3qDA6GFcUFJpbIrznBgxFSB3x8" \
  -d '{"messages":[{"role":"system","content":"You are a friendly assistant that helps write stories"},{"role":"user","content":"Write a short story about a llama that goes on a journey to find an orange cloud "}]}'