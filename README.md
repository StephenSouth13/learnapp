🎓 LinguaLearn – Nền tảng học tiếng Anh & tiếng Đức
Website chính thức: vsm.org.vn
Tác giả: StephenSouth13 (Long Quách)

✨ Tính năng chính
🌐 Giao diện hiện đại, responsive

🔐 Đăng ký/Đăng nhập bằng Firebase Auth

📊 Dashboard theo dõi tiến độ học

📝 Dịch & phát âm từ được tô đậm

📘 Sổ từ vựng cá nhân (đồng bộ)

🎴 Luyện tập Flashcard có ảnh minh họa

🎧 Nhúng nhạc học ngôn ngữ (Spotify/Upload)

⏱ Ghi nhận thời gian học → đổi thưởng

🧾 Giao diện CRM thân thiện

🔐 Định tuyến bảo mật cho người dùng

🧰 Công nghệ sử dụng
Next.js 14 (App Router)

Tailwind CSS

Firebase Authentication

Google Translate API, Web Speech API

Firestore & LocalStorage

Spotify Embed / Audio Upload

Chart.js

🚀 Hướng dẫn cài đặt
1. Yêu cầu hệ thống
Node.js v18.17+

npm hoặc yarn

Tài khoản Firebase

2. Cài đặt
bash
Copy
Edit
git clone https://github.com/StephenSouth13/lingua-learn.git
cd lingua-learn
npm install
3. Tạo file .env.local
env
Copy
Edit
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
4. Chạy local
bash
Copy
Edit
npm run dev
Mở trình duyệt: http://localhost:3000

☁️ Triển khai với Vercel
Cách 1: Triển khai tự động
Push code lên GitHub

Đăng nhập vercel.com → New Project → Import repo

Thiết lập:

Preset: Next.js

Root Dir: ./

Build Command: next build

Output: .next

Env Variables: copy từ .env.local

Bấm Deploy

Cách 2: Dùng Vercel CLI
bash
Copy
Edit
npm install -g vercel
vercel login
vercel --prod
📁 Cấu trúc thư mục
csharp
Copy
Edit
lingua-learn/
├── app/               # Các route chính (dashboard, login, translate,...)
├── components/        # Giao diện con (auth, vocabulary, ui)
├── lib/               # Hàm xử lý Firebase và logic từ vựng
├── public/            # Hình ảnh và media
└── README.md
🔮 Kế hoạch mở rộng
Tích hợp AI luyện nói (ChatGPT)

VSM Store: đổi token lấy voucher

Chủ đề học nâng cao, avatar tùy chỉnh

Xếp hạng học viên, học nhóm trực tuyến

📜 Giấy phép
Dự án được phân phối theo MIT License

🧑‍💼 Tác giả & cộng sự
StephenSouth13 – Long Quách (chủ dự án)

longnguyen0611 – Nguyên Thành Long
GitHub: longnguyen0611
