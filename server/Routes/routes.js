import { Router } from "express";

const router = Router()


router.get('/projects',(req, res) => {
   res.send("All projects"); 
});

