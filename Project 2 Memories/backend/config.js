export const PORT = 8880

export const config_cors = {
  origin: "http://localhost:8881",  
  methods: ["GET","HEAD","PUT","PATCH","POST","DELETE"],
  allowedHeaders: ['Content-Type']
}

export const mongodb_url = 'mongodb+srv://GrvExplorer:p23anther591@memories.vnaeyye.mongodb.net/memories_collection?retryWrites=true&w=majority'