import { GameCard } from "./types";

const cards: GameCard[] = [
  // --- Existing Cards ---
  { 
    "id": 1, 
    "type": 0, 
    "content": "Kể về lần say rượu đáng xấu hổ nhất của bạn.",
    "penalty": 1
  },
  { 
    "id": 2, 
    "type": 0, 
    "content": "Bạn đã bao giờ 'cắm sừng' ai chưa?",
    "penalty": 2
  },
  { 
    "id": 3, 
    "type": 0, 
    "content": "Ai là người trong nhóm mà bạn muốn hẹn hò nhất?",
    "penalty": 2
  },
  { 
    "id": 4, 
    "type": 1, 
    "content": "Uống 2 ly liên tiếp mà không được thở.",
    "penalty": 2
  },
  { 
    "id": 5, 
    "type": 1, 
    "content": "Gọi cho người yêu cũ và nói 'Em nhớ anh/Anh nhớ em'.",
    "penalty": 2
  },
  { 
    "id": 6, 
    "type": 1, 
    "content": "Để người bên phải vẽ lên mặt bạn bằng bút mực.",
    "penalty": 1
  },
  { 
    "id": 7, 
    "type": 2, 
    "content": "Ai chưa từng đi vệ sinh mà quên xả nước?\n(Ai có thì uống)",
    "penalty": 1
  },
  { 
    "id": 8, 
    "type": 2, 
    "content": "Ai chưa từng stalk Facebook người yêu cũ?\n(Ai có thì uống)",
    "penalty": 1
  },
  { 
    "id": 9, 
    "type": 2, 
    "content": "Ai chưa từng hôn người lạ tại quán bar?\n(Ai có thì uống)",
    "penalty": 2
  },
  { 
    "id": 10, 
    "type": 3, 
    "content": "Cái gì càng kéo càng ngắn?",
    "answer": "Điếu thuốc",
    "penalty": 1
  },
  { 
    "id": 11, 
    "type": 3, 
    "content": "Cái gì đen khi bạn mua nó, đỏ khi dùng nó, và xám khi vứt nó đi?",
    "answer": "Than",
    "penalty": 1
  },
  { 
    "id": 12, 
    "type": 4, 
    "content": "Việt Nam có bao nhiêu tỉnh thành?",
    "answer": "63 Tỉnh thành",
    "penalty": 1
  },
  { 
    "id": 13, 
    "type": 4, 
    "content": "Kể tên 5 loại bia phổ biến tại Việt Nam trong 10 giây.",
    "answer": "Tùy người chơi kiểm chứng (Ví dụ: Tiger, Saigon, Heineken, Larue, 333...)",
    "penalty": 1
  },
  { 
    "id": 14, 
    "type": 5, 
    "content": "Oẳn tù tì với người đối diện, người thua uống.",
    "penalty": 1
  },
  { 
    "id": 15, 
    "type": 5, 
    "content": "Tất cả cùng nâng ly và hô 'Nhậu Vui'! Người đặt ly xuống cuối cùng phải uống cạn.",
    "penalty": 2
  },
  { "id": 16, "type": 0, "content": "Số tiền lớn nhất bạn từng 'vung tay quá trán' cho một món đồ vô dụng là bao nhiêu?", "penalty": 1 },
  { "id": 17, "type": 0, "content": "Nếu được hoán đổi thân xác với 1 người trong bàn này, bạn chọn ai và sẽ làm gì đầu tiên?", "penalty": 1 },
  { "id": 18, "type": 0, "content": "Bạn đã từng 'ghost' (biến mất không lý do) ai đó chưa? Tại sao?", "penalty": 2 },
  { "id": 19, "type": 0, "content": "Kể tên 1 người bạn vẫn còn âm thầm vào trang cá nhân để 'stalk' mỗi ngày.", "penalty": 2 },
  { "id": 20, "type": 0, "content": "Bí mật nào của bạn mà nếu lộ ra, cả bàn này sẽ phải sốc?", "penalty": 2 },
  { "id": 21, "type": 0, "content": "Bạn đã từng giả vờ say để được ai đó đưa về chưa?", "penalty": 1 },
  { "id": 22, "type": 1, "content": "Mở danh bạ, gọi cho người thứ 8 và nói: 'Tao vừa trúng số, nhưng không cho mày đâu' rồi cúp máy.", "penalty": 2 },
  { "id": 23, "type": 1, "content": "Để người bên trái vẽ một hình xăm bằng bút mực lên mặt và giữ đến cuối buổi nhậu.", "penalty": 2 },
  { "id": 24, "type": 1, "content": "Cho mọi người xem 3 tấm ảnh gần nhất trong 'Album ảnh bị ẩn' hoặc 'Thùng rác'.", "penalty": 2 },
  { "id": 25, "type": 1, "content": "Uống 1 ly bia theo phong cách 'phim kiếm hiệp' và hô to một câu khẩu hiệu bất kỳ.", "penalty": 1 },
  { "id": 26, "type": 1, "content": "Nhắn tin cho sếp hoặc đồng nghiệp: 'Em thấy nhớ anh/chị quá' (Có thể thu hồi sau 1 phút).", "penalty": 2 },
  { "id": 27, "type": 1, "content": "Đứng lên ghế và thực hiện một điệu nhảy TikTok đang hot trong 30 giây.", "penalty": 1 },
  { 
    "id": 28, 
    "type": 2, 
    "content": "Ai chưa từng đi vệ sinh mà quên xả nước ở nhà người khác?\n(Ai có thì uống)", 
    "penalty": 1 
  },
  { 
    "id": 29, 
    "type": 2, 
    "content": "Ai chưa từng yêu đơn phương bạn thân của mình?\n(Ai có thì uống)", 
    "penalty": 2 
  },
  { 
    "id": 30, 
    "type": 2, 
    "content": "Ai chưa từng dùng chung bàn chải đánh răng với người khác?\n(Ai có thì uống)", 
    "penalty": 1 
  },
  { 
    "id": 31, 
    "type": 2, 
    "content": "Ai chưa từng bị cảnh sát giao thông thổi nồng độ cồn?\n(Ai có thì uống)", 
    "penalty": 2 
  },
  { 
    "id": 32, 
    "type": 2, 
    "content": "Ai chưa từng đặt đồ Shopee xong rồi tắt máy không nghe shipper gọi?\n(Ai có thì uống)", 
    "penalty": 1 
  },
  { 
    "id": 33, 
    "type": 2, 
    "content": "Ai chưa từng khóc khi xem một bộ phim hoạt hình?\n(Ai có thì uống)", 
    "penalty": 1 
  },
  { 
    "id": 34, 
    "type": 3, 
    "content": "Cái gì tay trái cầm được nhưng tay phải không bao giờ cầm được?", 
    "answer": "Khuỷu tay phải",
    "penalty": 1 
  },
  { 
    "id": 35, 
    "type": 3, 
    "content": "Loại nước giải khát nào chứa sắt và canxi?", 
    "answer": "Cafe (Ca: Canxi, Fe: Sắt)",
    "penalty": 1 
  },
  { 
    "id": 36, 
    "type": 3, 
    "content": "Con kiến bò lên tai con voi nói gì mà con voi lăn đùng ra chết?", 
    "answer": "Em đã có thai với anh",
    "penalty": 2 
  },
  { 
    "id": 37, 
    "type": 3, 
    "content": "Càng thâu lại càng dài là cái gì?", 
    "answer": "Thâu băng/Thâu video",
    "penalty": 1 
  },
  { 
    "id": 38, 
    "type": 3, 
    "content": "Con gì đập thì sống, không đập thì chết?", 
    "answer": "Con tim",
    "penalty": 1 
  },
  { 
    "id": 39, 
    "type": 4, 
    "content": "Quốc gia nào có diện tích lớn nhất thế giới?", 
    "answer": "Nga",
    "penalty": 1 
  },
  { 
    "id": 40, 
    "type": 4, 
    "content": "Hành tinh nào được gọi là 'Hành tinh đỏ'?", 
    "answer": "Sao Hỏa",
    "penalty": 1 
  },
  { 
    "id": 41, 
    "type": 4, 
    "content": "Trong bộ bài Tây, quân bài nào đại diện cho Alexander Đại Đế?", 
    "answer": "K Tép/Chuồn",
    "penalty": 2 
  },
  { 
    "id": 42, 
    "type": 4, 
    "content": "Việt Nam có bao nhiêu tỉnh thành giáp biển?", 
    "answer": "28 tỉnh thành (cũ) hoặc 21 tỉnh thành (mới)",
    "penalty": 1 
  },
  { 
    "id": 43, 
    "type": 4, 
    "content": "Loài động vật nào có vú duy nhất biết bay?", 
    "answer": "Con Dơi",
    "penalty": 1 
  },
  { 
    "id": 44, 
    "type": 5, 
    "content": "Nối từ!. Ai không nối được trong 5s thì uống.", 
    "penalty": 1 
  },
  { 
    "id": 45, 
    "type": 5, 
    "content": "Nhìn mặt đoán chữ! Bạn hãy suy nghĩ 1 từ, viết xuống giấy hoặc note lại đáp án. Sua đó bạn phải dùng hành động để người đối diện đoán.", 
    "penalty": 1 
  },
  { 
    "id": 46, 
    "type": 5, 
    "content": "Đếm số 7! Đếm từ 1, ai gặp số có số 7 hoặc chia hết cho 7 thì phải vỗ tay thay vì đọc.", 
    "penalty": 1 
  },
  { 
    "id": 47, 
    "type": 5, 
    "content": "Thử thách nhân phẩm! Tất cả oẳn tù tì, người thua cuối cùng phải uống hết 1 ly.", 
    "penalty": 1 
  },
  { "id": 48, "type": 1, "content": "Đổi chỗ ngồi với người đối diện hoặc phải uống 1 ly theo cách uống của người đó.", "penalty": 1 },
  { "id": 49, "type": 1, "content": "Để người bên cạnh 'makeup' cho bạn bằng tương ớt hoặc khăn ướt trong 2 phút.", "penalty": 2 },
  { "id": 50, "type": 1, "content": "Nhìn thẳng vào mắt người bên phải trong 30 giây không cười. Ai cười trước người đó uống.", "penalty": 1 },
  { "id": 51, "type": 1, "content": "Tịch thu điện thoại của bạn, người bên trái được quyền gửi 1 icon bất kỳ cho người yêu cũ của bạn.", "penalty": 2 },
  { "id": 52, "type": 1, "content": "Thực hiện lại 1 tư thế 'meme' huyền thoại trên mạng. Cả bàn thấy không giống thì uống.", "penalty": 1 },
  { "id": 53, "type": 1, "content": "Gọi video cho một người bạn không có mặt ở đây và nhờ họ chọn 1 người trong bàn phải uống 1 ly.", "penalty": 1 },
  { "id": 54, "type": 3, "content": "Cái gì của con gái luôn ẩm ướt?", "answer": "Cái lưỡi", "penalty": 1 },
  { "id": 55, "type": 3, "content": "Chuột nào đi bằng hai chân?", "answer": "Chuột Mickey", "penalty": 1 },
  { "id": 56, "type": 3, "content": "Cái gì khi sử dụng thì quăng đi, không sử dụng thì lấy lại?", "answer": "Cái mỏ neo", "penalty": 1 },
  { "id": 57, "type": 3, "content": "Càng chơi càng ra nước là môn gì?", "answer": "Chơi cờ vua/cờ tướng", "penalty": 1 },
  { "id": 58, "type": 3, "content": "Một con hổ bị xích vào gốc cây, sợi xích dài 30m. Có 1 bụi cỏ cách đó 31m, làm sao con hổ ăn được bụi cỏ?", "answer": "Hổ không ăn cỏ", "penalty": 1 },
  { "id": 59, "type": 4, "content": "Tại sao sau khi uống rượu mặt thường bị đỏ?", "answer": "Do cơ thể thiếu enzyme chuyển hóa Acetaldehyde", "penalty": 1 },
  { "id": 60, "type": 4, "content": "Quốc gia nào tiêu thụ bia nhiều nhất thế giới tính theo đầu người?", "answer": "Cộng hòa Séc", "penalty": 1 },
  { "id": 61, "type": 4, "content": "'Chivas' là thương hiệu rượu của quốc gia nào?", "answer": "Scotland", "penalty": 1 },
  { "id": 62, "type": 4, "content": "Loại thực phẩm nào được mệnh danh là 'vàng trắng'?", "answer": "Muối", "penalty": 1 },
  { "id": 63, "type": 4, "content": "Ai là người phát minh ra bóng đèn dây tóc?", "answer": "Thomas Edison (mặc dù ông chỉ là người tối ưu hóa nó)", "penalty": 1 },
  { "id": 64, "type": 4, "content": "Trong anime Naruto, Naruto thích ăn món gì nhất?", "answer": "Ramen Ichiraku", "penalty": 1 },
  { "id": 65, "type": 5, "content": "'Bắn súng'! Bạn chỉ tay vào 1 người và hô 'Pằng'. Người đó phải giơ tay lên, 2 người bên cạnh người đó phải giơ tay và hô 'Á'. Ai chậm nhất uống.", "penalty": 1 },
  { "id": 66, "type": 5, "content": "'Tôi đi chợ'. Bạn bắt đầu: 'Tôi đi chợ mua con cá'. Người tiếp theo lặp lại và thêm 1 món. Ai quên thì uống.", "penalty": 1 },
  { "id": 67, "type": 5, "content": "'Vỗ tay theo nhịp'. Cả bàn vỗ tay theo nhịp 1-2-3. Đến lượt ai người đó phải nói tên một thương hiệu xe hơi. Không trùng, không chậm.", "penalty": 1 },
  { "id": 68, "type": 5, "content": "'Truth or Drink'. Bạn đặt 1 câu hỏi cực gắt cho người bên cạnh. Họ chọn trả lời thật lòng hoặc uống cạn ly.", "penalty": 2 },
  
  // --- New Cards (From ID 69) ---
  
  // Type 0 (Truth)
  { "id": 69, "type": 0, "content": "Nếu bị lạc trên hoang đảo với 1 người trong bàn, bạn KHÔNG muốn ở cùng ai nhất? Tại sao?", "penalty": 2 },
  { "id": 70, "type": 0, "content": "Ai là người bạn cảm thấy khó ưa nhất khi mới gặp, nhưng giờ lại đang ngồi nhậu cùng?", "penalty": 1 },
  { "id": 71, "type": 0, "content": "Bạn đã từng 'thả thính' cùng lúc từ 2 người trở lên chưa?", "penalty": 2 },
  { "id": 72, "type": 0, "content": "Kể tên một món đồ 'người lớn' mà bạn đang sở hữu nhưng chưa từng nói cho ai biết.", "penalty": 2 },
  { "id": 73, "type": 0, "content": "Lần gần nhất bạn nói dối để trốn nhậu là gì? Và hôm đó bạn thực sự đã làm gì?", "penalty": 1 },

  // Type 1 (Dare)
  { "id": 74, "type": 1, "content": "Ngậm một ngụm nước (hoặc bia) và để người đối diện chọc cười. Nếu phun ra thì uống 2 ly.", "penalty": 2 },
  { "id": 75, "type": 1, "content": "Giao quyền điều khiển Facebook/Instagram của bạn cho người bên phải đăng 1 Story bất kỳ trong 5 phút.", "penalty": 2 },
  { "id": 76, "type": 1, "content": "Giả giọng người yêu cũ và nói: 'Anh/Em vẫn còn nợ anh/em tiền chưa trả đó nha'.", "penalty": 1 },
  { "id": 77, "type": 1, "content": "Uống một ly theo kiểu 'Giao bôi' với người ngồi xa bạn nhất trong bàn.", "penalty": 1 },
  { "id": 78, "type": 1, "content": "Mở danh sách chặn (Block list) trên Facebook và giải thích lý do bạn chặn người đầu tiên trong danh sách.", "penalty": 2 },
  { "id": 79, "type": 1, "content": "Cho mọi người xem lịch sử tìm kiếm gần nhất trên Youtube của bạn.", "penalty": 2 },

  // Type 2 (NHIE)
  { "id": 80, "type": 2, "content": "Ai chưa từng đi nhầm vào nhà vệ sinh khác giới?\n(Ai có thì uống)", "penalty": 1 },
  { "id": 81, "type": 2, "content": "Ai chưa từng gửi tin nhắn nói xấu một người cho chính người đó (gửi nhầm)?\n(Ai có thì uống)", "penalty": 2 },
  { "id": 82, "type": 2, "content": "Ai chưa từng 'bùng' kèo nhậu phút chót với lý do giả vờ đau bụng?\n(Ai có thì uống)", "penalty": 1 },
  { "id": 83, "type": 2, "content": "Ai chưa từng thức đến 4 giờ sáng chỉ để xem TikTok?\n(Ai có thì uống)", "penalty": 1 },

  // Type 3 (Riddles)
  { "id": 84, "type": 3, "content": "Cái gì của chồng mà vợ thích cầm nhất?", "answer": "Tiền lương (hoặc cái ví)", "penalty": 1 },
  { "id": 85, "type": 3, "content": "Làm thế nào để chia 3 quả táo cho 4 người bằng 1 nhát cắt?", "answer": "Xay thành sinh tố", "penalty": 2 },
  { "id": 86, "type": 3, "content": "Cái gì đánh cha, đánh má, đánh anh, đánh chị, đánh cả gia đình?", "answer": "Bàn chải đánh răng", "penalty": 1 },
  { "id": 87, "type": 3, "content": "Bệnh gì bác sĩ bó tay?", "answer": "Gãy tay", "penalty": 1 },
  { "id": 88, "type": 3, "content": "Vịt nào đi bằng hai chân?", "answer": "Vịt nào cũng đi bằng hai chân (trừ vịt què)", "penalty": 1 },

  // Type 4 (Trivia)
  { "id": 89, "type": 4, "content": "Thủ đô của Úc là thành phố nào?", "answer": "Canberra (không phải Sydney)", "penalty": 1 },
  { "id": 90, "type": 4, "content": "Dòng sông nào dài nhất thế giới?", "answer": "Sông Nile (hoặc Amazon tùy quan điểm đo đạc)", "penalty": 1 },
  { "id": 91, "type": 4, "content": "Trong bộ bài Tây, quân K nào không có ria mép?", "answer": "K Cơ", "penalty": 2 },
  { "id": 92, "type": 4, "content": "Việt Nam có bao nhiêu di sản thế giới được UNESCO công nhận? (Tính đến 2024)", "answer": "8 Di sản (5 văn hóa, 2 tự nhiên, 1 hỗn hợp)", "penalty": 2 },
  { "id": 93, "type": 4, "content": "Loài vật nào có thể ngủ khi đang đứng?", "answer": "Ngựa", "penalty": 1 },

  // Type 5 (Mini-games)
  { "id": 94, "type": 5, "content": "Game: 'Kể tên thương hiệu'. Chủ đề: 'Các hãng xe điện'. Ai không kể được trong 3s thì uống.", "penalty": 1 },
  { "id": 95, "type": 5, "content": "Game: 'Vua Tiếng Việt'. App đưa ra các chữ: 'N/H/Ậ/U/U/V/I'. Ai đoán ra nhanh nhất được chỉ định 1 người uống.", "answer": "NHẬU VUI", "penalty": 1 },
  { "id": 96, "type": 5, "content": "Game: 'Tay nhanh hơn não'. Tất cả đặt tay lên bàn, ai là người rút tay về cuối cùng sau tiếng đếm 1-2-3 của bạn thì uống.", "penalty": 1 },
  { "id": 97, "type": 5, "content": "Game: 'Nối chữ địa danh'. Ví dụ: Hà Nội -> Nội Bài. Ai bí thì uống.", "penalty": 1 },
  { "id": 98, "type": 5, "content": "Game: 'Cấm nói'. Trong vòng 3 phút, ai nói bất kỳ từ nào có chứa chữ 'Nhậu' thì phải uống 1 ly.", "penalty": 2 },
  { "id": 99, "type": 5, "content": "Game: 'Nhìn gương'. Bạn làm 1 hành động, người đối diện phải làm ngược lại. Nếu họ làm giống bạn thì họ uống.", "penalty": 1 },
  { "id": 100, "type": 5, "content": "Game: 'Kết đoàn'. Bạn hô 'Kết 3!', mọi người phải nhanh chóng tạo nhóm 3 người. Ai lẻ loi thì uống.", "penalty": 1 },

  // --- Vua Tiếng Việt Series (ID 101 - 125) ---
  
  // Chủ đề: Đồ nhậu & Đồ uống
  { 
    "id": 101, 
    "type": 5, 
    "content": "Game: 'Vua Tiếng Việt'.\n(Bạn có 10s để đoán. Không ra thì uống)", 
    "answer": "MỒI BÉN", 
    "penalty": 1 
  },
  { 
    "id": 102, 
    "type": 5, 
    "content": "Game: 'Vua Tiếng Việt'.\n(Ai đoán ra đầu tiên được chỉ định người uống)", 
    "answer": "BIA HƠI", 
    "penalty": 1 
  },
  { 
    "id": 103, 
    "type": 5, 
    "content": "Game: 'Vua Tiếng Việt'.\n(Chỉ định người ngồi đối diện đoán. Không ra thì họ uống)", 
    "answer": "LÒNG XÀO DƯA", 
    "penalty": 1 
  },
  { 
    "id": 104, 
    "type": 5, 
    "content": "Game: 'Vua Tiếng Việt'.\n(Cả bàn cùng đoán. Ai chậm nhất thì uống)", 
    "answer": "RƯỢU NẾP CẨM", 
    "penalty": 1 
  },
  { 
    "id": 105, 
    "type": 5, 
    "content": "Game: 'Vua Tiếng Việt'.\n(Bạn có 10s để đoán. Không ra thì uống)", 
    "answer": "ĐẬU PHỘNG RANG", 
    "penalty": 1 
  },

  // Chủ đề: Hành động nhậu (Drinking Actions)
  { 
    "id": 106, 
    "type": 5, 
    "content": "Game: 'Vua Tiếng Việt'.\n(Ai đoán ra đầu tiên được chỉ định người uống)", 
    "answer": "TỚI BẾN", 
    "penalty": 1 
  },
  { 
    "id": 107, 
    "type": 5, 
    "content": "Game: 'Vua Tiếng Việt'.\n(Chỉ định người ngồi đối diện đoán. Không ra thì họ uống)", 
    "answer": "ZÔ HẾT", 
    "penalty": 1 
  },
  { 
    "id": 108, 
    "type": 5, 
    "content": "Game: 'Vua Tiếng Việt'.\n(Cả bàn cùng đoán. Ai chậm nhất thì uống)", 
    "answer": "KHÔNG SAY KHÔNG VỀ", 
    "penalty": 2 
  },
  { 
    "id": 109, 
    "type": 5, 
    "content": "Game: 'Vua Tiếng Việt'.\n(Bạn có 10s để đoán. Không ra thì uống)", 
    "answer": "RƯỢU VÀO LỜI RA", 
    "penalty": 2 
  },
  { 
    "id": 110, 
    "type": 5, 
    "content": "Game: 'Vua Tiếng Việt'.\n(Ai đoán ra đầu tiên được chỉ định người uống)", 
    "answer": "CẠN LY", 
    "penalty": 1 
  },
  { 
    "id": 111, 
    "type": 5, 
    "content": "Game: 'Vua Tiếng Việt'.\n(Chỉ định người ngồi đối diện đoán. Không ra thì họ uống)", 
    "answer": "TỬU LƯỢNG", 
    "penalty": 1 
  },

  // Chủ đề: Slang & Cà khịa (Trending)
  { 
    "id": 112, 
    "type": 5, 
    "content": "Game: 'Vua Tiếng Việt'.\n(Cả bàn cùng đoán. Ai chậm nhất thì uống)", 
    "answer": "CÀ KHỊA", 
    "penalty": 1 
  },
  { 
    "id": 113, 
    "type": 5, 
    "content": "Game: 'Vua Tiếng Việt'.\n(Bạn có 10s để đoán. Không ra thì uống)", 
    "answer": "ĐÚNG NHẬN SAI CÃI", 
    "penalty": 2 
  },
  { 
    "id": 114, 
    "type": 5, 
    "content": "Game: 'Vua Tiếng Việt'.\n(Ai đoán ra đầu tiên được chỉ định người uống)", 
    "answer": "XU CÀ NA", 
    "penalty": 1 
  },
  { 
    "id": 115, 
    "type": 5, 
    "content": "Game: 'Vua Tiếng Việt'.\n(Chỉ định người ngồi đối diện đoán. Không ra thì họ uống)", 
    "answer": "ỐI GIỜI ƠI", 
    "penalty": 1 
  },
  { 
    "id": 116, 
    "type": 5, 
    "content": "Game: 'Vua Tiếng Việt'.\n(Cả bàn cùng đoán. Ai chậm nhất thì uống)", 
    "answer": "TỘI TÁC", 
    "penalty": 1 
  }, 
  { 
    "id": 117, 
    "type": 5, 
    "content": "Game: 'Vua Tiếng Việt'.\n(Bạn có 10s để đoán. Không ra thì uống)", 
    "answer": "CƠN MƯA NGANG QUA", 
    "penalty": 2 
  },

  // Chủ đề: Sinh viên IT
  { 
    "id": 118, 
    "type": 5, 
    "content": "Game: 'Vua Tiếng Việt'.\n(Ai đoán ra đầu tiên được chỉ định người uống)", 
    "answer": "CODE XUYÊN ĐÊM", 
    "penalty": 1 
  },
  { 
    "id": 119, 
    "type": 5, 
    "content": "Game: 'Vua Tiếng Việt'.\n(Chỉ định người ngồi đối diện đoán. Không ra thì họ uống)", 
    "answer": "LỖI GIAO DIỆN", 
    "penalty": 1 
  },
  { 
    "id": 120, 
    "type": 5, 
    "content": "Game: 'Vua Tiếng Việt'.\n(Cả bàn cùng đoán. Ai chậm nhất thì uống)", 
    "answer": "HẾT CỬA FIX BUG", 
    "penalty": 2 
  },
  { 
    "id": 121, 
    "type": 5, 
    "content": "Game: 'Vua Tiếng Việt'.\n(Bạn có 10s để đoán. Không ra thì uống)", 
    "answer": "THỰC TẬP SINH", 
    "penalty": 1 
  },
  { 
    "id": 122, 
    "type": 5, 
    "content": "Game: 'Vua Tiếng Việt'.\n(Ai đoán ra đầu tiên được chỉ định người uống)", 
    "answer": "ĐỒ ÁN TỐT NGHIỆP", 
    "penalty": 2 
  },

  // Câu khó "Hack não"
  { 
    "id": 123, 
    "type": 5, 
    "content": "Game: 'Vua Tiếng Việt'.\n(Chỉ định người ngồi đối diện đoán. Không ra thì họ uống)", 
    "answer": "TRONG SẠCH", 
    "penalty": 1 
  },
  { 
    "id": 124, 
    "type": 5, 
    "content": "Game: 'Vua Tiếng Việt'.\n(Cả bàn cùng đoán. Ai chậm nhất thì uống)", 
    "answer": "LĂNG BĂM", 
    "penalty": 1 
  },
  { 
    "id": 125, 
    "type": 5, 
    "content": "Game: 'Vua Tiếng Việt'.\n(Bạn có 10s để đoán. Không ra thì uống)", 
    "answer": "ĐỘC LẬP TỰ DO", 
    "penalty": 1 
  },

  // --- Lịch sử & Văn học Việt Nam (ID 126 - 150) ---
  
  // Chủ đề: Văn học
  { "id": 126, "type": 4, "content": "Văn học: Ai là tác giả của tác phẩm 'Truyện Kiều'?", "answer": "Nguyễn Du", "penalty": 1 },
  { "id": 127, "type": 4, "content": "Văn học: Trong tác phẩm 'Lão Hạc', con chó của lão Hạc tên là gì?", "answer": "Cậu Vàng", "penalty": 1 },
  { "id": 128, "type": 4, "content": "Văn học: Nữ sĩ nào được mệnh danh là 'Bà Chúa Thơ Nôm'?", "answer": "Hồ Xuân Hương", "penalty": 1 },
  { "id": 129, "type": 4, "content": "Văn học: 'Thân em vừa trắng lại vừa tròn / Bảy nổi ba chìm với nước non' là bài thơ nào?", "answer": "Bánh trôi nước (Hồ Xuân Hương)", "penalty": 1 },
  { "id": 130, "type": 4, "content": "Văn học: Nhân vật Thị Nở nổi tiếng với món ăn nào dành cho Chí Phèo?", "answer": "Cháo hành", "penalty": 1 },
  { "id": 131, "type": 4, "content": "Văn học: Tác giả của bài thơ 'Nam quốc sơn hà' (Bản tuyên ngôn độc lập đầu tiên) là ai?", "answer": "Lý Thường Kiệt", "penalty": 2 },
  { "id": 132, "type": 4, "content": "Văn học: Tập thơ 'Nhật ký trong tù' được Bác Hồ viết bằng ngôn ngữ nào?", "answer": "Chữ Hán", "penalty": 2 },
  { "id": 133, "type": 4, "content": "Văn học: 'Tắt đèn' là tác phẩm tiêu biểu của nhà văn nào?", "answer": "Ngô Tất Tố", "penalty": 1 },
  { "id": 134, "type": 4, "content": "Văn học: Kể tên 3 nhà thơ trong phong trào 'Thơ Mới' (1932-1945).", "answer": "Xuân Diệu, Huy Cận, Hàn Mặc Tử, Chế Lan Viên...", "penalty": 1 },
  { "id": 135, "type": 4, "content": "Văn học: Nhân vật Mị trong 'Vợ chồng A Phủ' là người dân tộc nào?", "answer": "Dân tộc Mông (H'Mông)", "penalty": 1 },

  // Chủ đề: Lịch sử
  { "id": 136, "type": 4, "content": "Lịch sử: Vị vua nào đã quyết định dời đô từ Hoa Lư về Thăng Long năm 1010?", "answer": "Lý Công Uẩn (Lý Thái Tổ)", "penalty": 1 },
  { "id": 137, "type": 4, "content": "Lịch sử: Ai là người đã có câu nói nổi tiếng: 'Bao giờ người Tây nhổ hết cỏ nước Nam mới hết người Nam đánh Tây'?", "answer": "Nguyễn Trung Trực", "penalty": 2 },
  { "id": 138, "type": 4, "content": "Lịch sử: Trận điện biên phủ trên không năm 1972 diễn ra trong bao nhiêu ngày đêm?", "answer": "12 ngày đêm", "penalty": 2 },
  { "id": 139, "type": 4, "content": "Lịch sử: Vị vua cuối cùng của triều đại phong kiến Việt Nam là ai?", "answer": "Vua Bảo Đại", "penalty": 1 },
  { "id": 140, "type": 4, "content": "Lịch sử: Ai là người đã cắm cờ trên dinh Độc Lập vào ngày 30/04/1975?", "answer": "Bùi Quang Thận", "penalty": 2 },
  { "id": 141, "type": 4, "content": "Lịch sử: Hai Bà Trưng cưỡi con vật gì khi ra trận?", "answer": "Voi", "penalty": 1 },
  { "id": 142, "type": 4, "content": "Lịch sử: Người anh hùng dân tộc nào đã ba lần chiến thắng quân Nguyên Mông?", "answer": "Trần Hưng Đạo (Trần Quốc Tuấn)", "penalty": 1 },
  { "id": 143, "type": 4, "content": "Lịch sử: Anh hùng thiếu niên nào đã bóp nát quả cam vì không được dự bàn việc quân?", "answer": "Trần Quốc Toản", "penalty": 1 },
  { "id": 144, "type": 4, "content": "Lịch sử: Tên gọi đầu tiên của nước ta dưới thời các vua Hùng là gì?", "answer": "Văn Lang", "penalty": 1 },
  { "id": 145, "type": 4, "content": "Lịch sử: Chiến thắng lẫy lừng của Ngô Quyền năm 938 trên sông nào đã chấm dứt 1000 năm bắc thuộc?", "answer": "Sông Bạch Đằng", "penalty": 1 },
  { "id": 146, "type": 4, "content": "Lịch sử: Ai là người lãnh đạo cuộc khởi nghĩa Lam Sơn chống quân Minh?", "answer": "Lê Lợi", "penalty": 1 },
  { "id": 147, "type": 4, "content": "Lịch sử: Nữ tướng duy nhất của Việt Nam được phong hàm Đại tướng là ai?", "answer": "Chưa có nữ Đại tướng (Bà Nguyễn Thị Định là Thiếu tướng)", "penalty": 2 },
  { "id": 148, "type": 4, "content": "Lịch sử: Thành phố Sài Gòn chính thức được đổi tên thành Thành phố Hồ Chí Minh vào năm nào?", "answer": "1976", "penalty": 2 },

  // Câu hỏi "Mix" hài hước
  { "id": 149, "type": 4, "content": "Lịch sử/Nhậu: Theo truyền thuyết, ai là người dạy dân ta cách trồng lúa và tổ chức lễ hội?", "answer": "Vua Hùng (Hùng Vương)", "penalty": 1 },
  { "id": 150, "type": 4, "content": "Văn học/Nhậu: Trong bài thơ 'Hắc hải', nhà thơ Nguyễn Duy có viết: 'Ta đi nhậu nhẹt khắp nơi...'. Đúng hay Sai?", "answer": "Sai (Không có bài thơ nào như vậy của Nguyễn Duy)", "penalty": 2 },

  // --- Thử thách Lịch sử & Văn học (ID 151 - 165) ---

  // Thử thách Kể tên (Yêu cầu phản xạ nhanh)
  { 
    "id": 151, "type": 1, 
    "content": "Thử thách: Kể tên 3 vị vua Việt Nam có công đánh đuổi giặc ngoại xâm trong 5 giây.", 
    "answer": "Ví dụ: Ngô Quyền, Trần Hưng Đạo, Quang Trung...", "penalty": 1 
  },
  { 
    "id": 152, "type": 1, 
    "content": "Thử thách: Kể tên 3 tác phẩm của nhà văn Nam Cao trong 10 giây.", 
    "answer": "Ví dụ: Chí Phèo, Lão Hạc, Đời Thừa...", "penalty": 1 
  },
  { 
    "id": 153, "type": 1, 
    "content": "Thử thách: Kể tên 3 địa danh lịch sử tại Hà Nội trong 5 giây.", 
    "answer": "Ví dụ: Hoàng Thành Thăng Long, Văn Miếu, Hồ Hoàn Kiếm...", "penalty": 1 
  },
  { 
    "id": 154, "type": 1, 
    "content": "Thử thách: Kể tên 3 nữ anh hùng trong lịch sử Việt Nam trong 5 giây.", 
    "answer": "Ví dụ: Hai Bà Trưng, Bà Triệu, Võ Thị Sáu...", "penalty": 1 
  },
  { 
    "id": 155, "type": 1, 
    "content": "Thử thách: Kể tên 3 cố đô của Việt Nam qua các thời kỳ trong 5 giây.", 
    "answer": "Ví dụ: Hoa Lư, Cổ Loa, Huế, Thăng Long...", "penalty": 1 
  },
  { 
    "id": 156, "type": 1, 
    "content": "Thử thách: Kể tên 3 vị tướng nổi tiếng thời nhà Trần trong 10 giây.", 
    "answer": "Ví dụ: Trần Hưng Đạo, Trần Quang Khải, Trần Khánh Dư...", "penalty": 2 
  },

  // Thử thách Ngày tháng năm (Mốc son lịch sử)
  { 
    "id": 157, "type": 4, 
    "content": "Kiến thức: Bác Hồ đọc bản Tuyên ngôn Độc lập tại quảng trường Ba Đình vào ngày tháng năm nào?", 
    "answer": "02/09/1945", "penalty": 2 
  },
  { 
    "id": 158, "type": 4, 
    "content": "Kiến thức: Ngày giải phóng miền Nam, thống nhất đất nước là ngày tháng năm nào?", 
    "answer": "30/04/1975", "penalty": 2 
  },
  { 
    "id": 159, "type": 4, 
    "content": "Kiến thức: Năm nào Lý Công Uẩn dời đô về Thăng Long?", 
    "answer": "Năm 1010", "penalty": 1 
  },
  { 
    "id": 160, "type": 4, 
    "content": "Kiến thức: Chiến thắng Điện Biên Phủ 'lừng lẫy năm châu' diễn ra vào năm nào?", 
    "answer": "Năm 1954", "penalty": 1 
  },
  { 
    "id": 161, "type": 4, 
    "content": "Kiến thức: Đảng Cộng sản Việt Nam được thành lập vào ngày tháng năm nào?", 
    "answer": "03/02/1930", "penalty": 2 
  },
  { 
    "id": 162, "type": 4, 
    "content": "Kiến thức: Cách mạng Tháng Tám thành công vào năm nào?", 
    "answer": "Năm 1945", "penalty": 1 
  },
  { 
    "id": 163, "type": 4, 
    "content": "Kiến thức: Trường đại học đầu tiên của Việt Nam (Quốc Tử Giám) được thành lập vào năm nào?", 
    "answer": "Năm 1076", "penalty": 2 
  },
  { 
    "id": 164, "type": 4, 
    "content": "Kiến thức: Trận thủy chiến trên sông Bạch Đằng của Ngô Quyền diễn ra vào năm nào?", 
    "answer": "Năm 938", "penalty": 1 
  },
  { 
    "id": 165, "type": 4, 
    "content": "Kiến thức: Nhà thơ Hàn Mặc Tử tên thật là gì và mất năm bao nhiêu tuổi?", 
    "answer": "Nguyễn Trọng Trí - Mất năm 28 tuổi", "penalty": 2 
  }
];

export default cards;