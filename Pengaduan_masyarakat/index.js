import cors from "cors";
import express  from "express";
import MasyarakatRoutes from "./routes/masyarakat.route.js"
import PengaduanRoutes from "./routes/pengaduan.route.js"

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// routes
app.use(MasyarakatRoutes);
app.use(PengaduanRoutes);

app.listen(5000, ()=> console.log('Server Up and Running on port 5000'));