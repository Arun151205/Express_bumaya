import cors from "cors";
import express  from "express";
import FileUpload from "express-fileupload";
import MasyarakatRoutes from "./routes/masyarakat.route.js";
import PengaduanRoutes from "./routes/pengaduan.route.js";
import PetugasRoutes from "./routes/petugas.route.js";
import TanggapanRoutes from "./routes/tanggapan.route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(FileUpload());

// routes
app.use(MasyarakatRoutes);
app.use(PengaduanRoutes);
app.use(PetugasRoutes);
app.use(TanggapanRoutes);

app.listen(5000, ()=> console.log('Server Up and Running on port 5000'));