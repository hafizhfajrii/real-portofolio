import os
from PIL import Image, ImageDraw, ImageFont

def generate_favicon_ico():
    size = (64, 64)
    img = Image.new("RGBA", size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Draw background circle in pitch black #030106
    draw.ellipse([0, 0, 63, 63], fill=(3, 1, 6, 255))
    
    # Draw vertical bars and crossbar with purple tech gradient simulation
    # Colors: top white (255, 255, 255), middle lilac/violet (192, 132, 252), bottom royal purple (147, 51, 234)
    # Left bar x: 22..27, Right bar x: 37..42, Crossbar y: 30..34
    for y in range(19, 46):
        t = (y - 19) / 27.0
        # interpolate from (255, 255, 255) to (192, 132, 252) to (147, 51, 234)
        if t < 0.4:
            local_t = t / 0.4
            r = int(255 + (233 - 255) * local_t)
            g = int(255 + (213 - 255) * local_t)
            b = int(255 + (255 - 255) * local_t)
        else:
            local_t = (t - 0.4) / 0.6
            r = int(233 + (147 - 233) * local_t)
            g = int(213 + (51 - 213) * local_t)
            b = int(255 + (234 - 255) * local_t)
        
        color = (r, g, b, 255)
        # Left leg
        draw.line([(22, y), (27, y)], fill=color, width=1)
        # Right leg
        draw.line([(37, y), (42, y)], fill=color, width=1)
        # Crossbar
        if 30 <= y <= 34:
            draw.line([(22, y), (42, y)], fill=color, width=1)

    ico_path = os.path.join("public", "favicon.ico")
    img.save(ico_path, format="ICO", sizes=[(64, 64), (32, 32), (16, 16)])
    print(f"Generated {ico_path} successfully.")

def generate_resume_pdf():
    # PDF Stream with royal purple headers (0.58 0.20 0.92 rg)
    stream_content = """BT
/F2 20 Tf
50 780 Td
0.58 0.20 0.92 rg
(HAFIZH ALA'UDIN FAJRI) Tj
0 0 0 rg
/F1 11 Tf
0 -20 Td
(AI/ML Engineer  |  Data Scientist  |  Full-Stack Web Developer) Tj
/F1 9 Tf
0 -15 Td
0.3 0.35 0.4 rg
(Email: hafizhafizhafizh122@gmail.com   |   GitHub: github.com/hafizh   |   LinkedIn: Hafizh Ala'udin Fajri) Tj

/F2 13 Tf
0 -30 Td
0.58 0.20 0.92 rg
(RINGKASAN PROFESIONAL / PROFESSIONAL SUMMARY) Tj
0 0 0 rg
/F1 9.5 Tf
0 -16 Td
(Pengembang software dan AI/ML engineer dengan keahlian dalam perancangan model machine learning,) Tj
0 -13 Td
(data science, visualisasi analitik, serta arsitektur web modern full-stack berkinerja tinggi.) Tj

/F2 13 Tf
0 -28 Td
0.58 0.20 0.92 rg
(KEAHLIAN UTAMA / CORE COMPETENCIES) Tj
0 0 0 rg
/F2 10 Tf
0 -16 Td
(Artificial Intelligence & Machine Learning:) Tj
/F1 9.5 Tf
0 -13 Td
(  - Python, TensorFlow, PyTorch, Scikit-Learn, OpenCV, NLP, Deep Learning, HuggingFace) Tj
/F2 10 Tf
0 -16 Td
(Data Science & Analytics:) Tj
/F1 9.5 Tf
0 -13 Td
(  - Pandas, NumPy, SQL, Power BI, Exploratory Data Analysis (EDA), Statistical Modeling) Tj
/F2 10 Tf
0 -16 Td
(Full-Stack Web & Systems Development:) Tj
/F1 9.5 Tf
0 -13 Td
(  - TypeScript, JavaScript, Astro, React, Node.js, FastAPI, REST APIs, Tailwind CSS, Git) Tj

/F2 13 Tf
0 -28 Td
0.58 0.20 0.92 rg
(PENGALAMAN & RIWAYAT / EXPERIENCE & JOURNEY) Tj
0 0 0 rg
/F2 10.5 Tf
0 -16 Td
(Lead AI / ML Specialist) Tj
/F1 9 Tf
0 -12 Td
0.4 0.4 0.4 rg
(2024 - Sekarang  |  Autonomous Tech Labs) Tj
0 0 0 rg
/F1 9.5 Tf
0 -13 Td
(  - Memimpin riset dan implementasi model computer vision dan NLP berbasis transformer.) Tj
0 -13 Td
(  - Mengoptimalkan throughput pipeline inferensi machine learning hingga 40%.) Tj

/F2 10.5 Tf
0 -18 Td
(Senior Data Scientist) Tj
/F1 9 Tf
0 -12 Td
0.4 0.4 0.4 rg
(2022 - 2024  |  Data Matrix Analytics) Tj
0 0 0 rg
/F1 9.5 Tf
0 -13 Td
(  - Merancang end-to-end data pipelines dan arsitektur analitik prediktif multi-dimensi.) Tj
0 -13 Td
(  - Membangun dashboard analitik interaktif untuk visualisasi data real-time.) Tj

/F2 10.5 Tf
0 -18 Td
(Full-Stack Developer) Tj
/F1 9 Tf
0 -12 Td
0.4 0.4 0.4 rg
(2020 - 2022  |  Cyber Craft Studio) Tj
0 0 0 rg
/F1 9.5 Tf
0 -13 Td
(  - Mengembangkan aplikasi web performa tinggi dengan arsitektur RESTful modern dan clean code.) Tj

/F2 13 Tf
0 -28 Td
0.58 0.20 0.92 rg
(PORTOFOLIO PROYEK UNGGULAN / FEATURED PROJECTS) Tj
0 0 0 rg
/F2 10 Tf
0 -16 Td
(1. DataPulse BI & Neural Core:) Tj
/F1 9.5 Tf
0 -13 Td
(   Platform analitik prediktif AI real-time dengan integrasi model forecasting.) Tj
/F2 10 Tf
0 -16 Td
(2. VisionAI Inspector:) Tj
/F1 9.5 Tf
0 -13 Td
(   Sistem computer vision berkecepatan tinggi untuk deteksi anomali otomatis.) Tj
/F2 10 Tf
0 -16 Td
(3. Nexus E-Commerce Cloud:) Tj
/F1 9.5 Tf
0 -13 Td
(   Arsitektur web microservices dengan caching terdistribusi & payment gateway.) Tj
ET"""

    stream_bytes = stream_content.encode("latin1")
    stream_length = len(stream_bytes)

    pdf_body = f"""%PDF-1.4
%âãÏÓ
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>
endobj
4 0 obj
<< /Length {stream_length} >>
stream
{stream_content}
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
6 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj
xref
0 7
0000000000 65535 f 
0000000015 00000 n 
0000000068 00000 n 
0000000125 00000 n 
0000000252 00000 n 
0000003060 00000 n 
0000003138 00000 n 
trailer
<< /Size 7 /Root 1 0 R >>
startxref
3221
%%EOF
"""
    pdf_path = os.path.join("public", "cv", "Hafizh-Resume.pdf")
    with open(pdf_path, "wb") as f:
        f.write(pdf_body.encode("latin1"))
    print(f"Generated {pdf_path} successfully.")

if __name__ == "__main__":
    generate_favicon_ico()
    generate_resume_pdf()
