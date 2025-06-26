const questions = [
  {
    "id": 1,
    "question": "Bạn là quản trị viên của Công ty ABC. Bạn đang muốn cài đặt Windows Server 2012 R2 và bạn cần quyết định phiên bản nào để cài đặt. Bạn cần cài đặt một phiên bản Windows chỉ dành cho việc xác thực đăng nhập và không có gì khác. Bạn muốn tùy chọn an toàn nhất và chi phí không phải là vấn đề. Bạn nên cài đặt cái gì?",
    "options": [
      "Windows Server 2012 R2 Datacenter với GUI",
      "Windows Server 2012 R2 Datacenter Server Core",
      "Windows Server 2012 R2 Standard với GUI",
      "Windows Server 2012 R2 Web Server Core"
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 2,
    "question": "Bạn là giám đốc CNTT cho một tổ chức lớn. Một trong những đồng nghiệp của bạn đã cài đặt một máy Windows Server 2012 R2 Datacenter Server Core mới, nhưng bây giờ đội ngũ CNTT đã quyết định rằng nó nên là một máy Windows Server 2012 R2 Datacenter với GUI. Bạn nên làm gì?",
    "options": [
      "Cài đặt lại Windows Server 2012 R2 Datacenter Server Core trên cùng một máy.",
      "Cài đặt một máy mới với Windows Server 2012 R2 Datacenter Server Core.",
      "Chuyển đổi Windows Server 2012 R2 Datacenter Server Core hiện tại sang phiên bản Windows",
      "Khởi động kép máy với cả Windows Server 2012 R2 Datacenter Server Core và Windows Server"
    ],
    "answer": "C",
    "explanation": "Đây là phương pháp được khuyến nghị bởi Microsoft.",
    "part": "Phần 1"
  },
  {
    "id": 3,
    "question": "Bạn là quản trị viên cho công ty của mình và bạn đang xem xét nâng cấp máy chủ web Windows Server 2008 lên Windows Server 2012 R2. Microsoft đề xuất bạn sử dụng phiên bản nào của Windows Server 2012 R2?",
    "options": [
      "Windows Server 2012 R2 Datacenter",
      "Windows Server 2012 R2 Standard",
      "Windows Server 2012 R2 Essentials",
      "Windows Server 2012 R2 Foundation"
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 4,
    "question": "Bạn đang xem xét nâng cấp máy Windows Server 2008 R2 Enterprise với SP2 của mình lên Windows Server 2012 R2. Tổ chức của bạn đang xem xét ảo hóa toàn bộ phòng máy chủ của mình, nơi có 25 máy chủ. Bạn sẽ nâng cấp lên phiên bản nào của Windows Server 2012 R2?",
    "options": [
      "Windows Server 2012 R2 Datacenter",
      "Windows Server 2012 R2 Standard",
      "Windows Server 2012 R2 Essentials",
      "Windows Server 2012 R2 Foundation"
    ],
    "answer": "A",
    "explanation": "Đây là lựa chọn đúng dựa trên kiến thức Windows Server 2012 R2.",
    "part": "Phần 1"
  },
  {
    "id": 5,
    "question": "Bạn đã được thuê để giúp một công ty nhỏ thiết lập mạng Windows đầu tiên của họ. Công ty đã có cùng 13 người dùng trong suốt hai năm hoạt động và không có kế hoạch mở rộng. Bạn sẽ đề xuất phiên bản nào của Windows Server 2012 R2?",
    "options": [
      "Windows Server 2012 R2 Datacenter",
      "Windows Server 2012 R2 Standard",
      "Windows Server 2012 R2 Essentials",
      "Windows Server 2012 R2 Foundation"
    ],
    "answer": "D",
    "explanation": "Đây là cách tiếp cận tốt nhất trong tình huống này.",
    "part": "Phần 1"
  },
  {
    "id": 6,
    "question": "Bạn đã được thuê để giúp một công ty nhỏ thiết lập mạng Windows của họ. Công ty có 20 người dùng và không có kế hoạch mở rộng. Bạn sẽ đề xuất phiên bản nào của Windows Server 2012 R2?",
    "options": [
      "Windows Server 2012 R2 Datacenter",
      "Windows Server 2012 R2 Standard",
      "Windows Server 2012 R2 Essentials",
      "Windows Server 2012 R2 Foundation"
    ],
    "answer": "C",
    "explanation": "Đây là phương pháp được khuyến nghị bởi Microsoft.",
    "part": "Phần 1"
  },
  {
    "id": 8,
    "question": "Bạn là quản trị viên máy chủ và bạn đang cố gắng tiết kiệm dung lượng ổ cứng trên máy Windows Server 2012 R2 Datacenter của mình. Tính năng nào có thể giúp bạn tiết kiệm dung lượng ổ cứng?",
    "options": [
      "HDSaver.exe",
      "Features On Demand (Tính năng theo yêu cầu)",
      "ADDS (Dịch vụ Miền Active Directory)",
      "WinRM (Quản lý từ xa Windows)"
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 9,
    "question": "Bạn có một máy chủ tên là SRV1 chạy Windows Server 2012 R2. Bạn muốn xóa Windows Explorer, Windows Internet Explorer và tất cả các thành phần và tệp khỏi máy này. Bạn nên chạy lệnh nào?",
    "options": [
      "msiexec.exe /uninstall iexplore.exe /x",
      "msiexec.exe /uninstall explorer.exe /x",
      "Uninstall-WindowsFeature Server-Gui-Mgmt-Infra -Remove",
      "Uninstall-WindowsFeature Server-Gui-Shell -Remove"
    ],
    "answer": "D",
    "explanation": "Đây là cách tiếp cận tốt nhất trong tình huống này.",
    "part": "Phần 1"
  },
  {
    "id": 10,
    "question": "Bạn sẽ cài đặt loại bộ điều khiển miền nào vào một khu vực có lo ngại về an ninh vật lý?",
    "options": [
      "Bộ điều khiển miền chính (Primary domain controller)",
      "Bộ điều khiển miền dự phòng (Backup domain controller)",
      "Bộ điều khiển miền chỉ đọc (Read-only domain controller)",
      "Bộ điều khiển miền bị khóa (Locked-down domain controller)"
    ],
    "answer": "C",
    "explanation": "Đây là phương pháp được khuyến nghị bởi Microsoft.",
    "part": "Phần 1"
  },
  {
    "id": 11,
    "question": "Bạn là quản trị viên hệ thống của một tổ chức lớn gần đây đã triển khai Windows Server 2012 R2. Bạn có một vài trang web từ xa không có an ninh chặt chẽ. Bạn đã quyết định triển khai các bộ điều khiển miền chỉ đọc (RODC). Mạng cần có các cấp độ chức năng rừng và miền nào để bạn thực hiện cài đặt?",
    "options": [
      "Windows 2000 Mixed",
      "Windows 2008 R2",
      "Windows 2003",
      "Windows 2008"
    ],
    "answer": "D",
    "explanation": "Đây là cách tiếp cận tốt nhất trong tình huống này.",
    "part": "Phần 1"
  },
  {
    "id": 12,
    "question": "Số lượng miền tối đa mà một máy tính Windows Server 2012 R2 được cấu hình làm bộ điều khiển miền có thể tham gia cùng một lúc là bao nhiêu?",
    "options": [
      "Không",
      "Một",
      "Hai",
      "Bất kỳ số lượng miền nào"
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 13,
    "question": "Một quản trị viên hệ thống đang cố gắng xác định hệ thống tệp nào sẽ sử dụng cho một máy chủ sẽ trở thành máy chủ tệp và bộ điều khiển miền Windows Server 2012 R2. Công ty có các yêu cầu sau: Hệ thống tệp phải cho phép bảo mật cấp tệp từ trong Windows 2012 R2 Server. Hệ thống tệp phải sử dụng không gian hiệu quả trên các phân vùng lớn. Sysvol của bộ điều khiển miền phải được lưu trữ trên phân vùng. Hệ thống tệp nào sau đây đáp ứng các yêu cầu này?",
    "options": [
      "FAT",
      "FAT32",
      "HPFS",
      "NTFS"
    ],
    "answer": "D",
    "explanation": "Đây là cách tiếp cận tốt nhất trong tình huống này.",
    "part": "Phần 1"
  },
  {
    "id": 18,
    "question": "Bạn là quản trị viên mạng cho một công ty lớn sản xuất các vật dụng nhỏ. Ban quản lý yêu cầu bạn triển khai một hệ thống Windows Server 2012 R2 mới. Bạn cần triển khai quản lý danh tính liên kết. Điều nào sau đây sẽ giúp bạn làm điều này?",
    "options": [
      "Active Directory Federation Services (Dịch vụ Liên kết Active Directory)",
      "Active Directory DNS Services (Dịch vụ DNS Active Directory)",
      "Active Directory IIS Services (Dịch vụ IIS Active Directory)",
      "Active Directory IAS Services (Dịch vụ IAS Active Directory)"
    ],
    "answer": "A",
    "explanation": "Đây là lựa chọn đúng dựa trên kiến thức Windows Server 2012 R2.",
    "part": "Phần 1"
  },
  {
    "id": 19,
    "question": "Bạn là quản trị viên hệ thống chịu trách nhiệm về cơ sở hạ tầng của công ty. Bạn nghĩ rằng bạn có vấn đề với việc phân giải tên và bạn cần xác minh rằng bạn đang sử dụng tên máy chủ chính xác. Bạn muốn kiểm tra DNS trên hệ thống cục bộ và cần xem liệu tên máy chủ server-1 có phân giải thành địa chỉ IP 10.1.1.1 hay không. Hành động nào sau đây cung cấp giải pháp cho vấn đề?",
    "options": [
      "Thêm một máy chủ DNS vào mạng con cục bộ của bạn.",
      "Thêm ánh xạ cho tên máy chủ server-1 vào địa chỉ IP 10.1.1.1 trong tệp HOSTS của hệ thống cục bộ.",
      "Thêm một bản ghi A vào máy chủ WINS cục bộ của bạn.",
      "Thêm một bản ghi MX vào máy chủ DNS cục bộ của bạn."
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 20,
    "question": "Bạn có một rừng Active Directory trong tổ chức của mình chứa một miền tên là Stellacon.com. Bạn có hai bộ điều khiển miền được cấu hình với vai trò DNS được cài đặt. Có hai vùng Tích hợp Active Directory có tên là Stellacon.com và Stellatest.com. Một trong những thành viên CNTT của bạn (không phải là quản trị viên) cần có thể sửa đổi máy chủ DNS Stellacon.com, nhưng bạn cần ngăn người dùng này sửa đổi bản ghi SOA của Stellatest.com. Bạn thực hiện điều này như thế nào?",
    "options": [
      "Sửa đổi quyền của vùng Stellacon.com từ snap-in Trình quản lý DNS.",
      "Sửa đổi quyền của vùng Stellatest.com từ snap-in Trình quản lý DNS.",
      "Chạy Trình hướng dẫn ủy quyền kiểm soát (Delegation Of Control Wizard) trong Active Directory.",
      "Chạy Trình hướng dẫn ủy quyền kiểm soát (Delegation Of Control Wizard) trong snap-in DNS."
    ],
    "answer": "A",
    "explanation": "Đây là lựa chọn đúng dựa trên kiến thức Windows Server 2012 R2.",
    "part": "Phần 1"
  },
  {
    "id": 21,
    "question": "Công ty nơi bạn làm việc có một nhóm hành chính đa cấp được phân chia theo các phòng ban và địa điểm. Có bốn địa điểm chính, và bạn thuộc nhóm Đông Bắc. Bạn đã được chỉ định vào nhóm hành chính chịu trách nhiệm tạo và duy trì các chia sẻ mạng cho các tệp và máy in trong khu vực của bạn. Nơi làm việc cuối cùng của bạn có một mạng Windows Server 2003 lớn, nơi bạn có nhiều trách nhiệm hơn. Bạn rất hào hứng với cơ hội tìm hiểu thêm về Windows Server 2012 R2. Đối với nhiệm vụ đầu tiên của mình, bạn đã được cung cấp một danh sách các chia sẻ tệp và máy in cần được tạo cho người dùng trong khu vực của bạn. Bạn hỏi cách tạo chúng trong Windows Server 2012 R2, và bạn được cho biết rằng quy trình tạo một chia sẻ giống như với Windows Server 2003. Bạn tạo các chia sẻ và sử dụng NET USE để kiểm tra chúng. Mọi thứ dường như hoạt động tốt, vì vậy bạn gửi một thông báo rằng các chia sẻ đã có sẵn. Ngày hôm sau, bạn bắt đầu nhận được các cuộc gọi từ người dùng nói rằng họ không thể thấy bất kỳ tài nguyên nào bạn đã tạo. Lý do có khả năng nhất cho các cuộc gọi từ người dùng là gì?",
    "options": [
      "Bạn quên bật NetBIOS cho các chia sẻ.",
      "Bạn cần buộc sao chép để các chia sẻ xuất hiện trong thư mục.",
      "Bạn cần xuất bản các chia sẻ trong thư mục.",
      "Các chia sẻ sẽ xuất hiện trong khoảng thời gian sao chép bình thường."
    ],
    "answer": "C",
    "explanation": "Đây là phương pháp được khuyến nghị bởi Microsoft.",
    "part": "Phần 1"
  },
  {
    "id": 22,
    "question": "Bạn muốn xuất bản một máy in lên Active Directory. Bạn sẽ nhấp vào đâu để hoàn thành tác vụ này?",
    "options": [
      "Tab Sharing (Chia sẻ)",
      "Tab Advanced (Nâng cao)",
      "Tab Device Settings (Cài đặt thiết bị)",
      "Nút Printing Preferences (Tùy chọn in)"
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 24,
    "question": "Bạn là quản trị viên mạng cho một nhà phân phối hạt cà phê cỡ vừa. Mạng của công ty bạn có bốn máy chủ Windows 2012 R2, và tất cả các máy khách đang chạy Windows 8 hoặc Windows 7. Hầu hết người dùng cuối của bạn sử dụng máy tính xách tay để làm việc, và nhiều người trong số họ làm việc xa văn phòng. Bạn nên cấu hình gì để giúp họ làm việc trên các tài liệu khi ở xa văn phòng?",
    "options": [
      "Truy cập tệp trực tuyến (Online file access)",
      "Truy cập tệp ngoại tuyến (Offline file access)",
      "Quyền chia sẻ (Share permissions)",
      "Quyền NTFS"
    ],
    "answer": "C",
    "explanation": "Đây là phương pháp được khuyến nghị bởi Microsoft.",
    "part": "Phần 1"
  },
  {
    "id": 26,
    "question": "Will, giám đốc CNTT của công ty bạn, đã được yêu cầu cấp cho Moe quyền đọc và thay đổi tài liệu trong thư mục Stellacon Documents. Bảng sau đây cho thấy các quyền hiện tại trên thư mục được chia sẻ: Nhóm/Người dùng NTFS Chia sẻ Sales Read Change Marketing Modify Change R&D Deny Full Control Finance Read Read Tylor Read Change Moe là thành viên của các nhóm Sales và Finance. Khi Moe truy cập thư mục Stellacon Documents, anh ấy có thể đọc tất cả các tệp, nhưng hệ thống không cho phép anh ấy thay đổi hoặc xóa tệp. Bạn cần làm gì để cấp cho Moe số quyền tối thiểu để thực hiện công việc của mình?",
    "options": [
      "Cấp cho Sales quyền Full Control cho các quyền chia sẻ.",
      "Cấp cho Moe quyền Full Control cho bảo mật NTFS.",
      "Cấp cho Finance quyền Modify cho bảo mật NTFS.",
      "Cấp cho Moe quyền Modify cho bảo mật NTFS."
    ],
    "answer": "C",
    "explanation": "Đây là phương pháp được khuyến nghị bởi Microsoft.",
    "part": "Phần 1"
  },
  {
    "id": 27,
    "question": "Bạn là quản trị viên mạng của mình, bao gồm hai hệ thống Windows Server 2012 R2. Một trong các máy chủ là bộ điều khiển miền và máy chủ còn lại là máy chủ tệp để lưu trữ dữ liệu. Ổ cứng của máy chủ tệp đang bắt đầu đầy. Bạn không có khả năng cài đặt một ổ cứng khác, vì vậy bạn quyết định giới hạn dung lượng mà mọi người có trên ổ cứng. Bạn cần triển khai gì để giải quyết vấn đề của mình?",
    "options": [
      "Phân bổ đĩa (Disk spacing)",
      "Hạn ngạch đĩa (Disk quotas)",
      "Làm cứng đĩa (Disk hardening)",
      "Giới hạn đĩa (Disk limitations)"
    ],
    "answer": "D",
    "explanation": "Đây là cách tiếp cận tốt nhất trong tình huống này.",
    "part": "Phần 1"
  },
  {
    "id": 30,
    "question": "Bạn đã được một công ty nhỏ thuê để triển khai các hệ thống Windows Server 2012 R2 mới. Công ty muốn bạn thiết lập một máy chủ cho các vị trí thư mục chính của người dùng. Bạn sẽ thiết lập loại máy chủ nào?",
    "options": [
      "Máy chủ PDC (PDC server)",
      "Máy chủ web (Web server)",
      "Máy chủ Exchange (Exchange server)",
      "Máy chủ tệp (File server)"
    ],
    "answer": "C",
    "explanation": "Đây là phương pháp được khuyến nghị bởi Microsoft.",
    "part": "Phần 1"
  },
  {
    "id": 1,
    "question": "Bạn muốn xây dựng một môi trường thử nghiệm dựa trên các máy ảo trên một máy Windows Server 2012 R2 duy nhất, nhưng bạn cũng muốn đảm bảo rằng các máy ảo chỉ giao tiếp với nhau. Bạn cần cấu hình loại mạng ảo nào?",
    "options": [
      "Mạng bên ngoài (External)",
      "Chỉ mạng nội bộ (Internal only)",
      "Mạng máy ảo riêng tư (Private virtual machine network)",
      "Mạng máy ảo công cộng (Public virtual machine network)"
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 2,
    "question": "Andy muốn thay đổi bộ nhớ của một máy ảo hiện đang được bật. Anh ấy cần làm gì?",
    "options": [
      "Tắt máy ảo, sử dụng cài đặt của máy ảo để thay đổi bộ nhớ, và khởi động lại.",
      "Sử dụng cài đặt của máy ảo để thay đổi bộ nhớ.",
      "Tạm dừng máy ảo, sử dụng cài đặt của máy ảo để thay đổi bộ nhớ, và tiếp tục.",
      "Lưu trạng thái máy ảo, sử dụng cài đặt của máy ảo để thay đổi bộ nhớ, và tiếp tục."
    ],
    "answer": "C",
    "explanation": "Đây là phương pháp được khuyến nghị bởi Microsoft.",
    "part": "Phần 1"
  },
  {
    "id": 3,
    "question": "Bạn muốn đảm bảo rằng không gian đĩa cứng cho các máy ảo của bạn chỉ bị chiếm dụng khi cần thiết. Bạn sẽ đề xuất loại đĩa cứng ảo nào?",
    "options": [
      "Đĩa mở rộng động (Dynamically expanding disk)",
      "Đĩa kích thước cố định (Fixed-size disk)",
      "Đĩa khác biệt (Differencing disk)",
      "Đĩa vật lý hoặc đĩa truyền qua (Physical or pass-through disk)"
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 4,
    "question": "Làm thế nào để bạn thêm một đĩa vật lý vào một máy ảo?",
    "options": [
      "Sử dụng Trình hướng dẫn Đĩa cứng ảo (Virtual Hard Disk Wizard).",
      "Sử dụng Trình hướng dẫn Chỉnh sửa Đĩa cứng ảo (Edit Virtual Hard Disk Wizard).",
      "Sử dụng cài đặt của máy ảo.",
      "Sử dụng Trình hướng dẫn Máy ảo Mới (New Virtual Machine Wizard)."
    ],
    "answer": "A",
    "explanation": "Đây là lựa chọn đúng dựa trên kiến thức Windows Server 2012 R2.",
    "part": "Phần 1"
  },
  {
    "id": 5,
    "question": "Yêu cầu CPU tối thiểu để chạy Hyper-V trên một máy là gì? (Chọn câu trả lời Sai.)",
    "options": [
      "Bộ xử lý dựa trên x64 (Intel hoặc AMD).",
      "Bảo vệ Thực thi Dữ liệu Phần cứng (Hardware Data Execution Protection - DEP) phải được bật.",
      "Ảo hóa được hỗ trợ phần cứng phải được bật.",
      "Bộ xử lý phải có ít nhất là lõi kép."
    ],
    "answer": "D",
    "explanation": "Đây là cách tiếp cận tốt nhất trong tình huống này.",
    "part": "Phần 1"
  },
  {
    "id": 6,
    "question": "Phát biểu nào là đúng đối với một mạng ảo bên ngoài (external virtual network)?",
    "options": [
      "Các máy ảo có thể giao tiếp với nhau và với máy chủ.",
      "Các máy ảo chỉ có thể giao tiếp với nhau.",
      "Các máy ảo có thể giao tiếp với nhau, với máy chủ, và với một mạng bên ngoài.",
      "Các máy ảo không thể giao tiếp với nhau."
    ],
    "answer": "C",
    "explanation": "Đây là phương pháp được khuyến nghị bởi Microsoft.",
    "part": "Phần 1"
  },
  {
    "id": 7,
    "question": "Bạn cần dừng một ứng dụng đang chạy trong Task Manager. Bạn sẽ sử dụng tab nào để dừng một ứng dụng đang chạy?",
    "options": [
      "Performance (Hiệu suất)",
      "Users (Người dùng)",
      "Options (Tùy chọn)",
      "Details (Chi tiết)"
    ],
    "answer": "D",
    "explanation": "Đây là cách tiếp cận tốt nhất trong tình huống này.",
    "part": "Phần 1"
  },
  {
    "id": 8,
    "question": "Bạn là quản trị viên của một máy Windows Server 2012 R2 mới. Bạn cần cài đặt WSUS. Bạn cài đặt WSUS từ đâu?",
    "options": [
      "Add/Remove Programs (Thêm/Gỡ bỏ Chương trình)",
      "Programs (Chương trình)",
      "Server Manager (Trình quản lý Máy chủ)",
      "Administrative Tools (Công cụ Quản trị)"
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 9,
    "question": "Bạn cần cài đặt Microsoft Baseline Security Analyzer. Bạn cần thực hiện cài đặt như thế nào?",
    "options": [
      "Tải xuống MBSA từ trang web của Microsoft.",
      "Cài đặt từ Server Manager.",
      "Sử dụng Add/Remove Programs.",
      "Cài đặt từ Programs."
    ],
    "answer": "D",
    "explanation": "Đây là cách tiếp cận tốt nhất trong tình huống này.",
    "part": "Phần 1"
  },
  {
    "id": 10,
    "question": "Trong khi thiết lập WSUS, bạn cần cấu hình máy chủ mà từ đó bạn sẽ nhận các bản cập nhật Microsoft của mình. Bạn sẽ thiết lập điều này trong tùy chọn nào?",
    "options": [
      "Products And Classifications (Sản phẩm và Phân loại)",
      "Update Files and Languages (Tệp cập nhật và Ngôn ngữ)",
      "Update Source And Proxy Server (Nguồn cập nhật và Máy chủ Proxy)",
      "Synchronization Schedule (Lịch đồng bộ hóa)"
    ],
    "answer": "C",
    "explanation": "Đây là phương pháp được khuyến nghị bởi Microsoft.",
    "part": "Phần 1"
  },
  {
    "id": 11,
    "question": "Bạn là quản trị viên của một tổ chức có một miền Active Directory duy nhất. Một trong những giám đốc cấp cao của bạn cố gắng đăng nhập vào máy và nhận được lỗi 'Tài khoản người dùng này đã hết hạn. Hãy yêu cầu quản trị viên của bạn kích hoạt lại tài khoản.' Bạn cần đảm bảo rằng điều này không xảy ra nữa với người dùng này. Bạn sẽ làm gì?",
    "options": [
      "Cấu hình chính sách miền để vô hiệu hóa việc khóa tài khoản.",
      "Cấu hình chính sách mật khẩu để kéo dài tuổi thọ mật khẩu tối đa thành 0.",
      "Sửa đổi thuộc tính của người dùng để đặt cài đặt Tài khoản không bao giờ hết hạn",
      "Sửa đổi thuộc tính của người dùng để đặt cài đặt Tài khoản không bao giờ hết hạn và vô hiệu hóa việc khóa tài khoản."
    ],
    "answer": "D",
    "explanation": "Đây là cách tiếp cận tốt nhất trong tình huống này.",
    "part": "Phần 1"
  },
  {
    "id": 12,
    "question": "Bạn cần tạo một tài khoản người dùng mới bằng dấu nhắc lệnh. Bạn sẽ sử dụng lệnh nào?",
    "options": [
      "dsmodify",
      "dscreate",
      "dsnew",
      "dsadd"
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 13,
    "question": "Maria là một người dùng thuộc nhóm toàn cục phân phối (distribution global group) Bán hàng (Sales). Cô ấy không thể truy cập vào máy in laser được chia sẻ trên mạng. Nhóm toàn cục Bán hàng có toàn quyền truy cập vào máy in laser. Làm thế nào để bạn khắc phục sự cố này?",
    "options": [
      "Thay đổi loại nhóm thành nhóm bảo mật (security group).",
      "Thêm nhóm toàn cục Bán hàng vào nhóm Administrators.",
      "Thêm nhóm toàn cục Bán hàng vào nhóm Printer Operators.",
      "Thay đổi nhóm Bán hàng thành nhóm cục bộ (local group)."
    ],
    "answer": "D",
    "explanation": "Đây là cách tiếp cận tốt nhất trong tình huống này.",
    "part": "Phần 1"
  },
  {
    "id": 14,
    "question": "Bạn là quản trị viên miền cho một miền lớn. Gần đây, bạn được yêu cầu thực hiện các thay đổi đối với một số quyền liên quan đến các OU trong miền. Để hạn chế bảo mật cho OU Texas hơn nữa, bạn đã xóa một số quyền ở cấp đó. Sau đó, một quản trị viên hệ thống cấp dưới đề cập rằng cô ấy không còn có thể thực hiện các thay đổi đối với các đối tượng trong OU Austin (nằm trong OU Texas). Giả sử không có thay đổi nào khác được thực hiện đối với quyền Active Directory, đặc điểm nào sau đây của OU có thể đã gây ra sự thay đổi về quyền?",
    "options": [
      "Kế thừa (Inheritance)",
      "Chính sách Nhóm (Group Policy)",
      "Ủy quyền (Delegation)",
      "Thuộc tính đối tượng (Object properties)"
    ],
    "answer": "C",
    "explanation": "Đây là phương pháp được khuyến nghị bởi Microsoft.",
    "part": "Phần 1"
  },
  {
    "id": 15,
    "question": "Bạn là quản trị viên hệ thống chính cho một miền Active Directory lớn. Gần đây, bạn đã thuê một quản trị viên hệ thống khác để bạn có thể giao bớt một số trách nhiệm của mình. Quản trị viên hệ thống này sẽ chịu trách nhiệm xử lý các cuộc gọi hỗ trợ (help desk) và quản lý tài khoản người dùng cơ bản. Bạn muốn cho phép nhân viên mới có quyền đặt lại mật khẩu cho tất cả người dùng trong một OU cụ thể. Tuy nhiên, vì lý do bảo mật, điều quan trọng là người dùng đó không thể thực hiện các thay đổi về quyền đối với các đối tượng trong các OU khác trong miền. Cách nào sau đây là tốt nhất để làm điều này?",
    "options": [
      "Tạo một tài khoản quản trị đặc biệt trong OU và cấp cho nó toàn quyền đối với tất cả các đối",
      "Di chuyển tài khoản đăng nhập của người dùng vào OU mà nhân viên mới sẽ quản trị.",
      "Di chuyển tài khoản đăng nhập của người dùng đến một OU chứa OU đó (tức là OU cha của",
      "Sử dụng Trình hướng dẫn Ủy quyền Kiểm soát (Delegation of Control Wizard) để gán các"
    ],
    "answer": "D",
    "explanation": "Đây là cách tiếp cận tốt nhất trong tình huống này.",
    "part": "Phần 1"
  },
  {
    "id": 17,
    "question": "Lệnh để cài đặt Hyper-V trên một máy Windows Server 2008 đã được cài đặt ở chế độ Server Core là gì?",
    "options": [
      "start /w ocsetup Hyper-V",
      "start /w ocsetup microsoft-hyper-v",
      "start /w ocsetup Microsoft-Hyper-V",
      "start /w ocsetup hyper-v"
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 19,
    "question": "Bạn là quản trị viên mạng cho một công ty trong danh sách Fortune 500. Bạn chịu trách nhiệm cho tất cả các máy tính khách tại cơ sở trung tâm. Bạn muốn đảm bảo rằng tất cả các máy tính khách đều được bảo mật. Bạn quyết định sử dụng MBSA để quét các máy tính khách của mình để tìm các vi phạm bảo mật có thể có. Bạn muốn sử dụng phiên bản dòng lệnh của MBSA để quét các máy tính của mình dựa trên địa chỉ IP. Bạn nên sử dụng lệnh nào sau đây?",
    "options": [
      "mdsacli.exe /hf -i xxxx.xxxx.xxxx.xxxx",
      "mdsacli.exe /ip xxxx.xxxx.xxxx.xxxx",
      "mbsa.exe /hf -ip xxxx.xxxx.xxxx.xxxx",
      "mbsa.exe /ip xxxx.xxxx.xxxx.xxxx"
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 20,
    "question": "Bạn là quản trị viên mạng cho công ty của mình. Mạng bao gồm một miền Active Directory duy nhất. Tất cả các máy chủ chạy Windows Server 2012 R2. Windows Server Update Services (WSUS) được cài đặt trên hai máy chủ, SERVERA và SERVERB. SERVERA nhận các bản cập nhật phần mềm từ các máy chủ Microsoft Windows Update. Bạn đã đồng bộ hóa thủ công SERVERB với các máy chủ Windows Update, và bây giờ bạn cần hoàn tất cấu hình WSUS trên SERVERB. Điều nào sau đây không phải là một bước bạn có thể thực hiện để hoàn tất cấu hình WSUS trên SERVERB?",
    "options": [
      "Phê duyệt các bản cập nhật hiện tại.",
      "Đặt SERVERB nhận các bản cập nhật từ SERVERA và tự động đồng bộ hóa với các bản cập nhật đã",
      "Đặt SERVERB tự động lấy các bản cập nhật từ bất kỳ nguồn nào mà SERVERA được đặt để",
      "Đặt SERVERB tự động nhận các bản cập nhật hàng ngày vào một thời điểm nhất định."
    ],
    "answer": "A",
    "explanation": "Đây là lựa chọn đúng dựa trên kiến thức Windows Server 2012 R2.",
    "part": "Phần 1"
  },
  {
    "id": 21,
    "question": "Bạn là quản trị viên của một tổ chức có một miền Active Directory duy nhất. Một người dùng đã nghỉ việc quay trở lại sau 16 tuần. Người dùng cố gắng đăng nhập vào máy tính cũ của họ và nhận được lỗi thông báo rằng xác thực đã thất bại. Tài khoản của người dùng đã được kích hoạt. Bạn cần đảm bảo rằng người dùng có thể đăng nhập vào miền bằng máy tính đó. Bạn sẽ làm gì?",
    "options": [
      "Đặt lại (reset) tài khoản máy tính trong Active Directory. Gỡ máy tính ra khỏi miền và",
      "Chạy lệnh ADadd để gia nhập lại tài khoản máy tính.",
      "Chạy tiện ích MMC trên máy tính của người dùng và thêm snap-in Domain Computers.",
      "Tạo lại tài khoản người dùng và kết nối lại tài khoản người dùng với tài khoản máy tính."
    ],
    "answer": "C",
    "explanation": "Đây là phương pháp được khuyến nghị bởi Microsoft.",
    "part": "Phần 1"
  },
  {
    "id": 22,
    "question": "Bạn là một nhà tư vấn được thuê để đánh giá miền Active Directory của một tổ chức. Miền này chứa hơn 200.000 đối tượng và hàng trăm OU. Bạn bắt đầu kiểm tra các đối tượng trong miền, nhưng bạn thấy rằng việc tải nội dung của các OU cụ thể mất nhiều thời gian. Hơn nữa, danh sách các đối tượng có thể rất lớn. Bạn muốn thực hiện những điều sau: ■ Sử dụng các công cụ quản trị Active Directory có sẵn và tránh sử dụng các công cụ hoặc tiện ích của bên thứ ba. ■ Giới hạn danh sách các đối tượng trong một OU chỉ còn loại đối tượng mà bạn đang kiểm tra (ví dụ: chỉ các đối tượng Máy tính). ■ Ngăn chặn bất kỳ thay đổi nào đối với miền Active Directory hoặc bất kỳ đối tượng nào trong đó. Hành động nào sau đây đáp ứng các yêu cầu này?",
    "options": [
      "Sử dụng tùy chọn Lọc (Filter) trong công cụ Active Directory Users and Computers để",
      "Sử dụng Trình hướng dẫn Ủy quyền Kiểm soát (Delegation of Control Wizard) để cấp cho",
      "Triển khai một quy ước đặt tên mới cho các đối tượng trong một OU và sau đó sắp xếp kết",
      "Sử dụng công cụ Active Directory Domains and Trusts để chỉ xem thông tin từ các bộ điều"
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 23,
    "question": "Bạn là quản trị viên của một tổ chức nhỏ có bốn máy chủ. Bạn có một máy chủ tập tin tên là Paniva chạy Windows Server 2012 R2. Bạn có một quản trị viên cấp dưới cần thực hiện sao lưu trên máy chủ này. Bạn cần đảm bảo rằng quản trị viên cấp dưới có thể sử dụng Sao lưu Windows Server (Windows Server Backup) để tạo một bản sao lưu hoàn chỉnh của Paniva. Bạn nên cấu hình gì để cho phép quản trị viên cấp dưới thực hiện sao lưu?",
    "options": [
      "Các nhóm cục bộ (local groups) bằng cách sử dụng Computer Management.",
      "Một tác vụ (task) bằng cách sử dụng Authorization Manager.",
      "Gán Quyền Người dùng (User Rights Assignment) bằng cách sử dụng Local Group Policy",
      "Gán Vai trò (Role Assignment) bằng cách sử dụng Authorization Manager."
    ],
    "answer": "A",
    "explanation": "Đây là lựa chọn đúng dựa trên kiến thức Windows Server 2012 R2.",
    "part": "Phần 1"
  },
  {
    "id": 24,
    "question": "Bạn chịu trách nhiệm quản lý một số máy tính điều khiển miền Windows Server 2012 R2 trong môi trường của mình. Gần đây, một đĩa cứng duy nhất trên một trong những máy này đã bị lỗi, và cơ sở dữ liệu Active Directory đã bị mất. Bạn muốn thực hiện các tác vụ sau: Xác định phân vùng nào trên máy chủ vẫn có thể truy cập được. Khôi phục càng nhiều cấu hình hệ thống (bao gồm cả cơ sở dữ liệu Active Directory) càng tốt. Điều nào sau đây có thể được sử dụng để giúp đáp ứng các yêu cầu này?",
    "options": [
      "Event Viewer (Trình xem sự kiện)",
      "Performance Monitor (Màn hình hiệu suất)",
      "Một đĩa cứng từ một máy chủ khác không được cấu hình làm bộ điều khiển miền",
      "Một bản sao lưu trạng thái hệ thống hợp lệ từ máy chủ"
    ],
    "answer": "C",
    "explanation": "Đây là phương pháp được khuyến nghị bởi Microsoft.",
    "part": "Phần 1"
  },
  {
    "id": 25,
    "question": "Bạn đã được thuê làm nhà tư vấn để nghiên cứu một vấn đề liên quan đến mạng tại một tổ chức nhỏ. Môi trường hỗ trợ nhiều ứng dụng được phát triển tùy chỉnh không được ghi lại rõ ràng. Một người quản lý nghi ngờ rằng một số máy tính trên mạng đang tạo ra lưu lượng truy cập quá mức và làm chậm mạng. Bạn muốn làm như sau: Xác định máy tính nào đang gây ra sự cố. Ghi lại và kiểm tra các gói mạng đến/đi từ các máy cụ thể. Chỉ xem dữ liệu liên quan đến các loại gói mạng cụ thể. Bạn nên sử dụng công cụ nào để hoàn thành tất cả các yêu cầu?",
    "options": [
      "Task Manager (Trình quản lý tác vụ)",
      "Performance Monitor (Màn hình hiệu suất)",
      "Event Viewer (Trình xem sự kiện)",
      "Network Monitor (Màn hình mạng)"
    ],
    "answer": "D",
    "explanation": "Đây là cách tiếp cận tốt nhất trong tình huống này.",
    "part": "Phần 1"
  },
  {
    "id": 27,
    "question": "Bạn là quản trị viên mạng cho một công ty trong danh sách Fortune 500. Bạn chịu trách nhiệm cho tất cả các máy tính khách tại cơ sở trung tâm. Bạn muốn đảm bảo rằng tất cả các máy tính khách đều có phần mềm mới nhất được cài đặt cho hệ điều hành của chúng, bao gồm phần mềm trong các danh mục Cập nhật Quan trọng và Gói Dịch vụ, Dòng Windows Server 2012 R2, và Cập nhật Trình điều khiển. Bạn muốn tự động hóa quy trình càng nhiều càng tốt, và bạn muốn các máy tính khách tải xuống các bản cập nhật từ một máy chủ trung tâm mà bạn đang quản lý. Bạn quyết định sử dụng Windows Server Update Services (WSUS). Phần mềm máy chủ WSUS đã được cài đặt trên một máy chủ có tên là WSUSServer. Bạn muốn kiểm tra máy chủ WSUS trước khi thiết lập các chính sách nhóm trong miền. Bạn cài đặt Windows 8. Cần phải thực hiện mục đăng ký nào sau đây để máy khách chỉ định rằng nó nên sử dụng WSUSServer cho Windows Update?",
    "options": [
      "Sử dụng",
      "Sử dụng",
      "Sử dụng",
      "Sử dụng"
    ],
    "answer": "D",
    "explanation": "Đây là cách tiếp cận tốt nhất trong tình huống này.",
    "part": "Phần 1"
  },
  {
    "id": 1,
    "question": "Bạn làm việc cho một tổ chức có một miền Active Directory Windows Server 2012 R2 duy nhất. Miền này có các OU cho Bán hàng, Tiếp thị, Quản trị, R&D và Tài chính. Bạn chỉ cần người dùng trong OU Tài chính được cài đặt tự động Windows Office 2013 vào máy tính của họ. Bạn tạo một GPO có tên OfficeApp. Bước tiếp theo để tất cả người dùng Tài chính có Office 2013 là gì?",
    "options": [
      "Chỉnh sửa GPO và gán ứng dụng Office cho tài khoản của người dùng. Liên kết GPO với OU Tài",
      "Chỉnh sửa GPO và gán ứng dụng Office cho tài khoản của người dùng. Liên kết GPO với miền.",
      "Chỉnh sửa GPO và gán ứng dụng Office cho tài khoản máy tính. Liên kết GPO với miền.",
      "Chỉnh sửa GPO và gán ứng dụng Office cho tài khoản máy tính. Liên kết GPO với OU Tài chính."
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 2,
    "question": "Bạn được thuê làm nhà tư vấn cho Công ty ABC. Chủ sở hữu của công ty phàn nàn rằng cô ấy tiếp tục có hình nền máy tính mà cô ấy không chọn. Khi bạn nói chuyện với nhóm CNTT, bạn phát hiện ra rằng một nhân viên cũ đã tạo 20 GPO và họ không thể tìm ra GPO nào đang thay đổi hình nền máy tính của chủ sở hữu. Làm thế nào bạn có thể giải quyết vấn đề này?",
    "options": [
      "Chạy tiện ích RSoP đối với tất cả các tài khoản máy tính trong rừng.",
      "Chạy tiện ích RSoP đối với tài khoản máy tính của chủ sở hữu.",
      "Chạy tiện ích RSoP đối với tài khoản người dùng của chủ sở hữu.",
      "Chạy tiện ích RSoP đối với tất cả các tài khoản máy tính trong miền."
    ],
    "answer": "C",
    "explanation": "Đây là phương pháp được khuyến nghị bởi Microsoft.",
    "part": "Phần 1"
  },
  {
    "id": 3,
    "question": "Bạn là quản trị viên mạng cho một tổ chức lớn có nhiều trang và nhiều OU. Bạn có một trang tên là SalesSite dành cho tòa nhà bán hàng bên kia đường. Trong miền, có một OU cho tất cả nhân viên bán hàng được gọi là Sales. Bạn thiết lập một GPO cho SalesSite và bạn cần chắc chắn rằng nó áp dụng cho OU Sales. Các GPO của OU Sales không thể ghi đè GPO của SalesSite. Bạn làm gì?",
    "options": [
      "Trên GPO, vô hiệu hóa cài đặt Chặn kế thừa con (Block Child Inheritance).",
      "Trên GPO, đặt cài đặt Thi hành (Enforce).",
      "Trên GPO, đặt mức độ ưu tiên thành 1.",
      "Trên OU Sales, đặt cài đặt Kế thừa chính sách cha (Inherit Parent Policy)."
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 4,
    "question": "Bạn là quản trị viên cho một tổ chức có nhiều địa điểm. Bạn đang chạy Windows Server 2012 R2 và bạn chỉ có một miền với nhiều OU được thiết lập cho mỗi địa điểm. Một trong những địa điểm của bạn, Boston, được kết nối với địa điểm chính bằng đường dây ISDN 256Kbps. Bạn định cấu hình một GPO để gán một ứng dụng bán hàng cho tất cả các máy tính trong toàn bộ miền. Bạn phải chắc chắn rằng người dùng Boston nhận được GPO đúng cách. Bạn nên làm gì?",
    "options": [
      "Vô hiệu hóa cài đặt Phát hiện liên kết chậm (Slow Link Detection) trong GPO.",
      "Liên kết GPO với OU Boston.",
      "Thay đổi thuộc tính của GPO để xuất bản ứng dụng cho OU Boston.",
      "Yêu cầu người dùng ở Boston chạy lệnh GPResult/force."
    ],
    "answer": "A",
    "explanation": "Đây là lựa chọn đúng dựa trên kiến thức Windows Server 2012 R2.",
    "part": "Phần 1"
  },
  {
    "id": 5,
    "question": "Để vô hiệu hóa cài đặt GPO cho một nhóm bảo mật cụ thể, bạn nên áp dụng quyền nào sau đây?",
    "options": [
      "Từ chối Ghi (Deny Write)",
      "Cho phép Ghi (Allow Write)",
      "Bật Áp dụng Chính sách Nhóm (Enable Apply Group Policy)",
      "Từ chối Áp dụng Chính sách Nhóm (Deny Apply Group Policy)"
    ],
    "answer": "D",
    "explanation": "Đây là cách tiếp cận tốt nhất trong tình huống này.",
    "part": "Phần 1"
  },
  {
    "id": 6,
    "question": "Các GPO được gán ở cấp độ nào sau đây sẽ ghi đè các cài đặt GPO ở cấp độ miền?",
    "options": [
      "OU",
      "Site (Trang)",
      "Domain (Miền)",
      "Cả OU và Site"
    ],
    "answer": "C",
    "explanation": "Đây là phương pháp được khuyến nghị bởi Microsoft.",
    "part": "Phần 1"
  },
  {
    "id": 7,
    "question": "Một quản trị viên hệ thống muốn đảm bảo rằng chỉ các GPO được đặt ở cấp OU mới ảnh hưởng đến cài đặt Chính sách Nhóm cho các đối tượng trong OU. Họ có thể sử dụng tùy chọn nào để làm điều này (giả sử rằng tất cả các cài đặt GPO khác là mặc định)?",
    "options": [
      "Tùy chọn Thi hành (Enforced)",
      "Tùy chọn Chặn kế thừa chính sách (Block Policy Inheritance)",
      "Tùy chọn Vô hiệu hóa (Disable)",
      "Quyền Từ chối (Deny)"
    ],
    "answer": "D",
    "explanation": "Đây là cách tiếp cận tốt nhất trong tình huống này.",
    "part": "Phần 1"
  },
  {
    "id": 8,
    "question": "Bạn là quản trị viên của một công ty lớn, và bạn cần đảm bảo rằng bạn có thể khôi phục cấu hình và dữ liệu Windows Server 2012 R2 Active Directory của mình nếu đĩa cứng của máy tính bị lỗi. Bạn nên làm gì?",
    "options": [
      "Tạo một hình ảnh Sao lưu và Khôi phục PC hoàn chỉnh.",
      "Tạo một bản sao lưu của tất cả các danh mục tệp.",
      "Thực hiện sao lưu phục hồi hệ thống tự động (ASR).",
      "Tạo một điểm khôi phục hệ thống."
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 9,
    "question": "Bạn là quản trị viên mạng và bạn muốn tạo nhiều chính sách mật khẩu cho người dùng trong miền của mình. Bạn sử dụng tiện ích nào để hoàn thành tác vụ này?",
    "options": [
      "MMC",
      "Schema Editor",
      "ADSI Edit",
      "Secedit.exe"
    ],
    "answer": "D",
    "explanation": "Đây là cách tiếp cận tốt nhất trong tình huống này.",
    "part": "Phần 1"
  },
  {
    "id": 10,
    "question": "Bạn là quản trị viên hệ thống cho một tổ chức lớn có nhiều bộ điều khiển miền Active Directory. Hiện tại, môi trường hỗ trợ nhiều bộ điều khiển miền khác nhau, một số trong đó đang chạy Windows 2008 và Windows Server 2012 R2. Khi bạn đang chạy các bộ điều khiển miền trong loại môi trường này, bạn không thể sử dụng loại nhóm nào sau đây?",
    "options": [
      "Nhóm bảo mật toàn cục (Universal security groups)",
      "Nhóm toàn cục (Global groups)",
      "Nhóm cục bộ miền (Domain local groups)",
      "Không có - bạn có thể sử dụng tất cả các loại nhóm"
    ],
    "answer": "C",
    "explanation": "Đây là phương pháp được khuyến nghị bởi Microsoft.",
    "part": "Phần 1"
  },
  {
    "id": 11,
    "question": "Bạn đang dạy một lớp Microsoft Active Directory, và một trong những sinh viên của bạn hỏi bạn thư mục nào sau đây trong công cụ Người dùng và Máy tính Active Directory được sử dụng khi người dùng từ bên ngoài rừng được cấp quyền truy cập vào các tài nguyên trong một miền? Bạn sẽ trả lời sinh viên của mình như thế nào?",
    "options": [
      "Users (Người dùng)",
      "Computers (Máy tính)",
      "Domain Controllers (Bộ điều khiển miền)",
      "Foreign Security Principals (Các thực thể bảo mật nước ngoài)"
    ],
    "answer": "D",
    "explanation": "Đây là cách tiếp cận tốt nhất trong tình huống này.",
    "part": "Phần 1"
  },
  {
    "id": 12,
    "question": "Người quản lý của bạn đã quyết định rằng tổ chức của bạn cần sử dụng một phân vùng dữ liệu ứng dụng Active Directory. Bạn có thể sử dụng lệnh nào để tạo và quản lý các phân vùng dữ liệu ứng dụng?",
    "options": [
      "DCPromo.exe",
      "NTDSUtil.exe",
      "ADUtil.exe",
      "ADSI.exe"
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 13,
    "question": "Quá trình gán quyền để đặt Chính sách Nhóm cho các đối tượng trong một OU được gọi là:",
    "options": [
      "Thăng cấp (Promotion)",
      "Kế thừa (Inheritance)",
      "Ủy quyền (Delegation)",
      "Lọc (Filtering)"
    ],
    "answer": "D",
    "explanation": "Đây là cách tiếp cận tốt nhất trong tình huống này.",
    "part": "Phần 1"
  },
  {
    "id": 14,
    "question": "Phát biểu nào sau đây là đúng về các hành động xảy ra khi một gói phần mềm bị xóa khỏi một GPO được liên kết với một OU?",
    "options": [
      "Ứng dụng sẽ được gỡ cài đặt tự động cho tất cả người dùng trong OU.",
      "Các cài đặt ứng dụng hiện tại sẽ không bị ảnh hưởng bởi thay đổi.",
      "Quản trị viên hệ thống có thể xác định hiệu ứng.",
      "Người dùng hiện tại có thể xác định hiệu ứng."
    ],
    "answer": "C",
    "explanation": "Đây là phương pháp được khuyến nghị bởi Microsoft.",
    "part": "Phần 1"
  },
  {
    "id": 15,
    "question": "Bạn là quản trị viên mạng, và bạn đã quyết định thiết lập một GPO với nhắm mục tiêu cấp mục. Điều nào sau đây không phải là một tùy chọn cho nhắm mục tiêu cấp mục?",
    "options": [
      "Nhắm mục tiêu có pin (Battery Present Targeting)",
      "Nhắm mục tiêu tên máy tính (Computer Name Targeting)",
      "Nhắm mục tiêu tốc độ CPU (CPU Speed Targeting)",
      "Nhắm mục tiêu có DVD (DVD Present Targeting)"
    ],
    "answer": "D",
    "explanation": "Đây là cách tiếp cận tốt nhất trong tình huống này.",
    "part": "Phần 1"
  },
  {
    "id": 18,
    "question": "Bạn là quản trị viên mạng cho tổ chức của mình. Bạn đang làm việc để tạo một GPO mới cho OU bán hàng. Bạn muốn GPO có hiệu lực ngay lập tức. Bạn sẽ sử dụng lệnh nào?",
    "options": [
      "GPForce",
      "GPUpdate",
      "GPResult",
      "GPExecute"
    ],
    "answer": "A",
    "explanation": "Đây là lựa chọn đúng dựa trên kiến thức Windows Server 2012 R2.",
    "part": "Phần 1"
  },
  {
    "id": 19,
    "question": "Bạn là quản trị viên mạng cho tổ chức của mình. Bạn đang làm việc để tạo một GPO mới cho OU Tiếp thị. Bạn muốn GPO có hiệu lực ngay lập tức, và bạn cần sử dụng Windows PowerShell. Bạn sẽ sử dụng lệnh cmdlet PowerShell nào?",
    "options": [
      "Invoke-GPUpdate",
      "Invoke-GPForce",
      "Invoke-GPResult",
      "Invoke-GPExecute"
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 20,
    "question": "Bạn là quản trị viên của một tổ chức lớn. Trong khi thiết lập bộ điều khiển miền Windows Server 2012 R2 của mình, bạn đang tạo một chiến lược khôi phục dữ liệu phải đáp ứng các yêu cầu sau: Sao lưu tất cả các tệp và thư mục dữ liệu trong C:\Data. Khôi phục các tệp và thư mục riêng lẻ trong C:\Data. Đảm bảo rằng dữ liệu được sao lưu vào và khôi phục từ phương tiện bên ngoài. Bạn nên làm gì?",
    "options": [
      "Sử dụng tính năng Phiên bản trước để khôi phục các tệp và thư mục.",
      "Sử dụng tính năng Khôi phục Hệ thống để thực hiện các hoạt động sao lưu và khôi phục.",
      "Sử dụng tiện ích NTBackup để sao lưu và khôi phục các tệp và thư mục riêng lẻ.",
      "Sử dụng Sao lưu Windows Server để sao lưu và khôi phục tệp."
    ],
    "answer": "A",
    "explanation": "Đây là lựa chọn đúng dựa trên kiến thức Windows Server 2012 R2.",
    "part": "Phần 1"
  },
  {
    "id": 22,
    "question": "Một quản trị viên hệ thống đang có kế hoạch triển khai các đối tượng Chính sách Nhóm trong môi trường Active Directory Windows Server 2012 R2 mới. Để đáp ứng nhu cầu của tổ chức, anh ấy quyết định triển khai một hệ thống phân cấp các cài đặt Chính sách Nhóm. Anh ấy có thể gán các cài đặt Chính sách Nhóm ở các cấp độ nào sau đây? 1.Sites (Trang) 2.Domains (Miền) 3.Organizational units (Đơn vị tổ chức) 4.Local system (Hệ thống cục bộ)",
    "options": [
      "1",
      "1,2",
      "1,2,3",
      "1,2,3,4"
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 1,
    "question": "Bạn tạo một GPO và liên kết nó với OU Bán hàng. Bạn muốn giám sát người dùng trong OU Bán hàng kết nối với máy chủ tệp. Bạn bật loại kiểm toán nào?",
    "options": [
      "Kiểm toán Truy cập Đối tượng (Audit Object Access)",
      "Kiểm toán Sự kiện Đăng nhập (Audit Logon Events)",
      "Kiểm toán Sự kiện Hệ thống (Audit System Events)",
      "Kiểm toán Theo dõi Tiến trình (Audit Process Tracking)"
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 2,
    "question": "Cổng TCP mặc định cho iSCSI là gì?",
    "options": [
      "3260",
      "1433",
      "21",
      "3389"
    ],
    "answer": "C",
    "explanation": "Đây là phương pháp được khuyến nghị bởi Microsoft.",
    "part": "Phần 1"
  },
  {
    "id": 3,
    "question": "Lệnh nào sẽ được sử dụng để đăng ký thủ công một trình khởi tạo iSCSI (iSCSI initiator) vào một máy chủ iSNS?",
    "options": [
      "iscsicli refreshisnsserver server_name",
      "iscsicli listisnsservers server_name",
      "iscsicli removeisnsserver server_name",
      "iscsicli addisnsserver server_name"
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 4,
    "question": "Bạn là một quản trị viên CNTT quản lý một môi trường chạy nhiều máy chủ Windows Server 2012 R2 từ nhiều địa điểm trang web trên khắp Hoa Kỳ. Các máy Windows Server 2012 R2 của bạn sử dụng bộ nhớ iSCSI. Các quản trị viên khác báo cáo rằng rất khó để định vị các tài nguyên iSCSI có sẵn trên mạng. Bạn cần đảm bảo các quản trị viên khác có thể dễ dàng truy cập tài nguyên iSCSI bằng cách sử dụng một kho lưu trữ tập trung. Bạn nên triển khai tính năng nào?",
    "options": [
      "Tính năng Nhà cung cấp Lưu trữ Đích iSCSI (iSCSI Target Storage Provider).",
      "Tính năng Quản lý Lưu trữ Dựa trên Tiêu chuẩn của Windows (Windows Standards-Based Storage",
      "Tính năng vai trò Máy chủ Đích iSCSI (iSCSI Target Server).",
      "Tính năng dịch vụ Máy chủ iSNS (iSNS Server service)."
    ],
    "answer": "A",
    "explanation": "Đây là lựa chọn đúng dựa trên kiến thức Windows Server 2012 R2.",
    "part": "Phần 1"
  },
  {
    "id": 5,
    "question": "Công ty của bạn có trụ sở chính tại Colorado Springs và có một địa điểm trang web từ xa ở Tampa. Văn phòng Colorado Spring có một máy chủ tệp tên là FS01. FS01 đã cài đặt dịch vụ vai trò BranchCache cho Tệp Mạng. Văn phòng Tampa của bạn có một máy chủ tệp tên là FS02. FS02 đã được cấu hình làm máy chủ bộ đệm ẩn được lưu trữ BranchCache. Bạn cần tải trước dữ liệu từ các chia sẻ tệp trên FS01 vào bộ đệm ẩn trên FS02. Bạn đã tạo các hàm băm cho các chia sẻ tệp trên FS01. Bạn nên chạy cmdlet nào tiếp theo?",
    "options": [
      "Export-BCCachePackage",
      "Publish-BCFileContent",
      "Set-BCCache",
      "Add-BCDataCacheExtension"
    ],
    "answer": "D",
    "explanation": "Đây là cách tiếp cận tốt nhất trong tình huống này.",
    "part": "Phần 1"
  },
  {
    "id": 6,
    "question": "Bạn có một máy chủ tệp Windows Server 2012 R2 tên là FS01. FS01 đã cài đặt dịch vụ vai trò Trình quản lý Tài nguyên Máy chủ Tệp. Bạn cố gắng xóa một thuộc tính phân loại và bạn nhận được thông báo lỗi “Thuộc tính phân loại đang được sử dụng và không thể xóa được.” Bạn cần xóa thuộc tính phân loại Chứa Thông tin Cá nhân. Bạn nên làm gì?",
    "options": [
      "Xóa giá trị thuộc tính phân loại Chứa Thông tin Cá nhân cho tất cả các tệp.",
      "Xóa quy tắc phân loại được gán thuộc tính phân loại Chứa Thông tin Cá nhân.",
      "Vô hiệu hóa quy tắc phân loại được gán thuộc tính phân loại Chứa Thông tin Cá nhân.",
      "Đặt các tệp có giá trị thuộc tính phân loại Chứa Thông tin Cá nhân là Có thành Không."
    ],
    "answer": "C",
    "explanation": "Đây là phương pháp được khuyến nghị bởi Microsoft.",
    "part": "Phần 1"
  },
  {
    "id": 1,
    "question": "Phiên bản nào sau đây của Windows Server 2012 R2 có thể được cấu hình trong một cụm chuyển đổi dự phòng (failover cluster)? (Chọn câu trả lời Sai.)",
    "options": [
      "Windows Server 2012 R2 Hyper-V edition",
      "Windows Server 2012 R2 Standard edition",
      "Windows Server 2012 R2 Foundation edition",
      "Windows Server 2012 R2 Datacenter edition"
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 2,
    "question": "Phiên bản nào sau đây của Windows Server 2012 có thể được cấu hình trong một cụm Cân bằng tải mạng (Network Load Balancing cluster)? (Chọn câu trả lời Sai.)",
    "options": [
      "Windows Server 2012 R2 Essentials edition",
      "Windows Server 2012 R2 Standard edition",
      "Windows Server 2012 R2 Hyper-V edition",
      "Windows Server 2012 R2 Datacenter edition"
    ],
    "answer": "C",
    "explanation": "Đây là phương pháp được khuyến nghị bởi Microsoft.",
    "part": "Phần 1"
  },
  {
    "id": 4,
    "question": "Hành động nào sau đây nên được thực hiện đối với một nút cụm NLB nếu cần bảo trì mà không chấm dứt các kết nối hiện tại?",
    "options": [
      "Trục xuất (Evict)",
      "Dừng xả (Drainstop)",
      "Tạm dừng (Pause)",
      "Dừng (Stop)"
    ],
    "answer": "A",
    "explanation": "Đây là lựa chọn đúng dựa trên kiến thức Windows Server 2012 R2.",
    "part": "Phần 1"
  },
  {
    "id": 9,
    "question": "Việc thăm dò danh sách thu hồi chứng chỉ (CRL) bắt đầu tiêu tốn băng thông. Bạn nên xem xét các bước nào để giảm lưu lượng mạng?",
    "options": [
      "Bạn nên xem xét việc triển khai vai trò Máy chủ Web Chính sách Đăng ký Chứng chỉ và vai trò Dịch",
      "Bạn nên xem xét việc triển khai một trình phản hồi trực tuyến.",
      "Bạn nên xem xét việc triển khai một CA cấp phát trực tuyến và một CA gốc.",
      "Bạn nên xem xét việc xuất bản nhiều CRL hơn."
    ],
    "answer": "D",
    "explanation": "Đây là cách tiếp cận tốt nhất trong tình huống này.",
    "part": "Phần 1"
  },
  {
    "id": 11,
    "question": "Tính năng Workplace Join mới hỗ trợ những gì sau đây?",
    "options": [
      "Liên kết một iPhone với mạng nội bộ của công ty",
      "Cho phép các máy khách Windows 8 xử lý các quan hệ tin cậy dựa trên xác nhận quyền sở hữu",
      "Cho phép các máy khách Windows 8 tự động hình thành các quan hệ tin cậy dựa trên xác nhận",
      "Tát cả các tính năng đều đúng"
    ],
    "answer": "D",
    "explanation": "Đây là cách tiếp cận tốt nhất trong tình huống này.",
    "part": "Phần 1"
  },
  {
    "id": 12,
    "question": "Bạn cài đặt và cấu hình bốn máy chủ Windows Server 2012 R2 làm một cụm máy chủ AD FS. Cơ sở dữ liệu cấu hình AD FS được lưu trữ trong cơ sở dữ liệu Microsoft SQL Server 2012. Bạn cần đảm bảo rằng AD FS sẽ tiếp tục hoạt động trong trường hợp một máy chủ AD FS bị lỗi. Bạn cũng cần đảm bảo rằng tất cả bốn máy chủ trong cụm AD FS sẽ tích cực thực hiện các chức năng của AD FS. Bạn nên bao gồm những gì trong giải pháp của mình?",
    "options": [
      "Windows Failover Clustering",
      "Windows Identity Foundation 3.5",
      "Network Load Balancing",
      "Web Proxy Server"
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 13,
    "question": "Mạng của bạn chứa một miền Active Directory có tên contoso.com. Bạn dự định triển khai một cụm Active Directory Federation Services (AD FS) Windows 2012 R2 sẽ chứa tám máy chủ liên kết. Bạn cần xác định công nghệ nào phải được triển khai trên mạng trước khi bạn cài đặt các máy chủ liên kết. Bạn nên xác định công nghệ nào?",
    "options": [
      "Network Load Balancing",
      "Microsoft Forefront Identity Manager 2010",
      "Tính năng Windows Internal Database",
      "Microsoft SQL Server 2012 R2"
    ],
    "answer": "D",
    "explanation": "Đây là cách tiếp cận tốt nhất trong tình huống này.",
    "part": "Phần 1"
  },
  {
    "id": 14,
    "question": "Bạn lưu trữ các máy chủ AD FS trong một OU có tên là Federation Servers. Bạn muốn tự động đăng ký các chứng chỉ được sử dụng cho AD FS. Bạn nên thêm chứng chỉ nào vào GPO?",
    "options": [
      "Chứng chỉ CA của Forest",
      "Chứng chỉ CA của bên thứ ba (VeriSign, Entrust)",
      "Chứng chỉ SSL được gán cho các máy chủ AD FS",
      "Chứng chỉ Ký mã thông báo (Token Signing certificate) được gán cho các Máy chủ AD FS"
    ],
    "answer": "C",
    "explanation": "Đây là phương pháp được khuyến nghị bởi Microsoft.",
    "part": "Phần 1"
  },
  {
    "id": 15,
    "question": "Bạn có kế hoạch triển khai Active Directory Rights Management Services (AD RMS) trên toàn doanh nghiệp. Bạn cần lập kế hoạch cài đặt cụm AD RMS cho rừng. Người dùng trong tất cả các miền sẽ truy cập các tài liệu được bảo vệ bằng AD RMS. Bạn cần giảm thiểu số lượng cụm AD RMS. Điều nào sau đây sẽ giúp bạn xác định bạn cần bao nhiêu cụm gốc AD RMS?",
    "options": [
      "Bạn cần ít nhất một cụm gốc AD RMS cho doanh nghiệp.",
      "Bạn cần ít nhất một cụm gốc AD RMS cho mỗi rừng.",
      "Bạn cần ít nhất một cụm gốc AD RMS cho mỗi miền.",
      "Bạn cần ít nhất một cụm gốc AD RMS cho mỗi trang Active Directory."
    ],
    "answer": "D",
    "explanation": "Đây là cách tiếp cận tốt nhất trong tình huống này.",
    "part": "Phần 1"
  },
  {
    "id": 16,
    "question": "Bạn là quản trị viên mạng cho một công ty máy tính cỡ vừa. Bạn có một rừng Active Directory duy nhất, và bạn có yêu cầu triển khai DHCP cho tổ chức. Bạn cần đảm bảo rằng cấu hình triển khai DHCP của bạn vừa có khả năng chịu lỗi vừa dự phòng. Trong số các tùy chọn được cung cấp, cấu hình DHCP nào đáng tin cậy nhất mà bạn có thể triển khai?",
    "options": [
      "DHCP split scope (phạm vi DHCP phân chia)",
      "DHCP multicast scope (phạm vi DHCP đa hướng)",
      "DHCP failover (chuyển đổi dự phòng DHCP)",
      "DHCP super scope (siêu phạm vi DHCP)"
    ],
    "answer": "D",
    "explanation": "Đây là cách tiếp cận tốt nhất trong tình huống này.",
    "part": "Phần 1"
  },
  {
    "id": 17,
    "question": "Bạn là quản trị viên hệ thống cho một công ty máy tính lớn. Bạn có một rừng Active Directory đa miền và bạn có yêu cầu triển khai các tùy chọn bảo mật DNS nâng cao cho tổ chức. Ba tùy chọn bảo mật nào bạn có thể cấu hình để làm cho DNS an toàn hơn trên mạng của mình? (Chọn phương án Sai.)",
    "options": [
      "DNSSEC",
      "Đăng ký DNS (DNS registration)",
      "Khóa bộ đệm DNS (DNS cache locking)",
      "Gom socket DNS (DNS socket pooling)"
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 18,
    "question": "Bạn là quản trị viên mạng cho một công ty phát triển phần mềm. Cơ sở hạ tầng DNS của bạn bao gồm nhiều máy chủ DNS phân tán về mặt địa lý. Bạn cần đảm bảo rằng khi máy khách thực hiện các truy vấn DNS, các truy vấn đó sẽ luôn được gửi đến máy chủ DNS gần nhất để thực hiện dịch vụ tra cứu. Điều gì phải được bật để điều này diễn ra trên mạng của bạn?",
    "options": [
      "Ghi nhật ký DNS (DNS logging)",
      "Quản trị được ủy quyền DNS (DNS delegated administration)",
      "Đệ quy DNS (DNS recursion)",
      "Sắp xếp theo netmask DNS (DNS netmask ordering)"
    ],
    "answer": "A",
    "explanation": "Đây là lựa chọn đúng dựa trên kiến thức Windows Server 2012 R2.",
    "part": "Phần 1"
  },
  {
    "id": 19,
    "question": "Bạn là giám đốc CNTT cho một công ty giải pháp lưu trữ doanh nghiệp. Bạn vừa thuê một thành viên mới vào đội ngũ mạng của mình với trách nhiệm chính là quản lý DNS cho tổ chức của bạn. Quản trị viên này sẽ không chịu trách nhiệm quản lý bất kỳ dịch vụ active directory nào khác của công ty. Nhóm bảo mật nào sẽ phù hợp nhất với trách nhiệm của quản trị viên này?",
    "options": [
      "Domain Admins",
      "Enterprise Admins",
      "Schema Admins",
      "DNSAdmins"
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 20,
    "question": "Bạn là quản trị viên mạng cho một công ty đồ chơi. Cơ sở hạ tầng DHCP của bạn bao gồm việc sử dụng các bản cập nhật động DNS. Bạn cần đảm bảo rằng các bản ghi A của máy chủ DNS không bị ghi đè bởi các thiết bị DNS mới có cùng tên máy chủ trong quá trình cập nhật động DNS. Tùy chọn cấu hình DHCP nào sẽ đáp ứng yêu cầu này?",
    "options": [
      "Cấu hình Đăng ký DNS (Configure DNS Registration)",
      "Cấu hình Bảo vệ Tên DHCP (Configure DHCP Name Protection)",
      "Cấu hình Tính sẵn sàng cao của DHCP (Configure DHCP High Availability)",
      "Triển khai một Phạm vi DHCPv6 (Implement A DHCPv6 Scope)"
    ],
    "answer": "A",
    "explanation": "Đây là lựa chọn đúng dựa trên kiến thức Windows Server 2012 R2.",
    "part": "Phần 1"
  },
  {
    "id": 21,
    "question": "Bạn là trưởng nhóm cơ sở hạ tầng cho một công ty phát triển phần cứng công nghệ cao. Bạn cần ủy quyền một số trách nhiệm quản trị IPAM của nhóm cho các thành viên trong nhóm. Bạn quyết định rằng Noelle sẽ quản lý không gian địa chỉ IPAM, nhưng cô ấy sẽ không quản lý việc theo dõi và kiểm toán địa chỉ IP. Nhóm bảo mật IPAM nào sẽ phù hợp nhất với trách nhiệm mới của Noelle?",
    "options": [
      "IPAM Administrators",
      "IPAM Users",
      "IPAM ASM Administrators",
      "IPAM MSM Administrators"
    ],
    "answer": "C",
    "explanation": "Đây là phương pháp được khuyến nghị bởi Microsoft.",
    "part": "Phần 1"
  },
  {
    "id": 22,
    "question": "Bạn là quản trị viên mạng cho một công ty truyền thông lớn. Gần đây bạn đã quyết định triển khai IPAM trong tổ chức của mình với việc phát hành Windows Server 2012 R2. Bạn muốn thiết lập cơ sở hạ tầng IPAM của mình để một máy chủ chính có thể quản lý toàn bộ doanh nghiệp của bạn. Phương pháp triển khai IPAM nào sẽ đáp ứng yêu cầu này?",
    "options": [
      "Cô lập (Isolated)",
      "Tập trung (Centralized)",
      "Lai (Hybrid)",
      "Phân tán (Distributed)"
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 23,
    "question": "Bạn là quản trị viên mạng chính cho một công ty lưu trữ web. Gần đây bạn đã quyết định triển khai IPAM trong tổ chức của mình. Bạn đã cài đặt và cung cấp tính năng IPAM trên máy chủ Windows Server 2012 R2 chuyên dụng của mình. Bước hợp lý tiếp theo trong quá trình triển khai IPAM của bạn là gì?",
    "options": [
      "Tạo một khối IP mới",
      "Ủy quyền quản trị IPAM",
      "Cấu hình khám phá máy chủ",
      "Tạo một dải IP mới"
    ],
    "answer": "A",
    "explanation": "Đây là lựa chọn đúng dựa trên kiến thức Windows Server 2012 R2.",
    "part": "Phần 1"
  },
  {
    "id": 24,
    "question": "Bạn là quản trị viên hệ thống của Tập đoàn Stellacon. Do sự tăng trưởng bất thường của các thiết bị TCP/IP trên mạng công ty của bạn trong năm qua, bạn cần mở rộng quy mô khả năng cơ sở dữ liệu IPAM của mình. Bạn hiện đang sử dụng Cơ sở dữ liệu Nội bộ Windows (WID) cho cơ sở hạ tầng IPAM của mình và bạn muốn di chuyển cơ sở dữ liệu IPAM của mình sang Microsoft SQL Server. Bạn sẽ sử dụng cmdlet PowerShell nào để xác minh cài đặt cấu hình cơ sở dữ liệu IPAM hiện tại?",
    "options": [
      "Get-IpamDatabase",
      "Show-IpamDatabaseConfig",
      "Show-IpamStatistics",
      "Get-IpamMigrationSettings"
    ],
    "answer": "C",
    "explanation": "Đây là phương pháp được khuyến nghị bởi Microsoft.",
    "part": "Phần 1"
  },
  {
    "id": 1,
    "question": "Bạn là quản trị viên mạng cho một công ty lớn có một trang chính và một văn phòng chi nhánh. Công ty của bạn có một rừng Active Directory duy nhất, ABC.com. Bạn có một bộ điều khiển miền duy nhất (ServerA) tại trang chính đã cài đặt vai trò DNS. ServerA được cấu hình như một vùng DNS chính. Bạn đã quyết định đặt một bộ điều khiển miền (ServerB) tại trang từ xa và triển khai vai trò DNS trên máy chủ đó. Bạn muốn cấu hình DNS để nếu liên kết WAN bị lỗi, người dùng ở cả hai trang vẫn có thể cập nhật bản ghi và giải quyết bất kỳ truy vấn DNS nào. Bạn nên cấu hình các máy chủ DNS như thế nào?",
    "options": [
      "Cấu hình ServerB làm máy chủ DNS phụ. Đặt sao chép diễn ra sau mỗi 5 phút.",
      "Cấu hình ServerB làm một vùng sơ khai (stub zone).",
      "Cấu hình ServerB làm một vùng Tích hợp Active Directory và chuyển đổi ServerA thành một vùng",
      "Chuyển đổi ServerA thành một vùng Tích hợp Active Directory và cấu hình ServerB làm một vùng"
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  },
  {
    "id": 2,
    "question": "Bạn là quản trị viên mạng cho một công ty máy tính cỡ vừa. Bạn có một rừng Active Directory duy nhất, và các máy chủ DNS của bạn được cấu hình như các vùng Tích hợp Active Directory. Khi bạn xem các bản ghi DNS trong Active Directory, bạn nhận thấy có nhiều bản ghi cho các máy tính không tồn tại trên miền của bạn. Bạn muốn đảm bảo rằng chỉ các máy tính trong miền mới đăng ký với các máy chủ DNS của bạn. Bạn nên làm gì để giải quyết vấn đề này?",
    "options": [
      "Đặt cập nhật động thành Không (None).",
      "Đặt cập nhật động thành Không an toàn và An toàn (Nonsecure And Secure).",
      "Đặt cập nhật động thành Chỉ người dùng miền (Domain Users Only).",
      "Đặt cập nhật động thành Chỉ an toàn (Secure Only)."
    ],
    "answer": "C",
    "explanation": "Đây là phương pháp được khuyến nghị bởi Microsoft.",
    "part": "Phần 1"
  },
  {
    "id": 3,
    "question": "Công ty của bạn bao gồm một rừng Active Directory duy nhất. Bạn có một bộ điều khiển miền Windows Server 2012 R2 cũng đã cài đặt vai trò DNS. Bạn cũng có một máy chủ DNS dựa trên Unix ở cùng một địa điểm. Bạn cần cấu hình máy chủ DNS Windows của mình để cho phép chuyển vùng đến máy chủ DNS dựa trên Unix. Bạn nên làm gì?",
    "options": [
      "Bật BIND Secondaries.",
      "Cấu hình máy Unix làm một vùng sơ khai.",
      "Chuyển đổi máy chủ DNS thành Tích hợp Active Directory.",
      "Cấu hình máy chủ Microsoft DNS để chuyển tiếp tất cả các yêu cầu đến máy chủ DNS Unix."
    ],
    "answer": "B",
    "explanation": "Đây là giải pháp phù hợp nhất cho yêu cầu được đặt ra.",
    "part": "Phần 1"
  }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = questions;
}
