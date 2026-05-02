export interface BlockchainNode {
  id: string;
  type: 'FARM' | 'PROCESSING' | 'LAB' | 'LOGISTICS' | 'RETAIL' | 'QC';
  title: string;
  location: string;
  coordinates: string;
  timestamp: string;
  documents: { name: string; url: string }[];
  images: string[];
  description: string;
  hash: string;
  txHash?: string;
  blockNumber?: number;
  gasUsed?: string;
  telemetry?: {
    label: string;
    unit: string;
    data: { time: string; value: number }[];
  }[];
}

export interface Product {
  id: string;
  category: string;
  name: string;
  image?: string;
  attributes: Record<string, string>;
  nodes: BlockchainNode[];
  sustainability?: {
    score: number;
    carbon_footprint: string;
    water_saved: string;
    social_impact: string;
    ai_insight: string;
  };
}

class NoSQLSim {
  collections: Record<string, any[]> = {
    network_stats: [
      { price: "$2,481.52", price_change: "+2.45%", market_cap: "$298.4B", gas_price: "12 Gwei", tps: "45.2" }
    ],
    latest_blocks: [
      { height: 19482415, validator: "AgriNode_VN_01", txns: 156, reward: "0.025 ETH", timestamp: "8 secs ago", size: "124 KB" },
      { height: 19482414, validator: "Lâm_Đồng_Core", txns: 204, reward: "0.031 ETH", timestamp: "20 secs ago", size: "156 KB" },
      { height: 19482413, validator: "Ninh_Hoà_Safe", txns: 89, reward: "0.018 ETH", timestamp: "32 secs ago", size: "98 KB" },
      { height: 19482412, validator: "HCM_Hub_02", txns: 142, reward: "0.025 ETH", timestamp: "44 secs ago", size: "112 KB" },
      { height: 19482411, validator: "AgriNode_VN_05", txns: 67, reward: "0.012 ETH", timestamp: "56 secs ago", size: "84 KB" },
      { height: 19482410, validator: "Đà_Lạt_Node", txns: 178, reward: "0.028 ETH", timestamp: "1 min ago", size: "132 KB" },
      { height: 19482409, validator: "AgriNode_VN_03", txns: 112, reward: "0.021 ETH", timestamp: "2 mins ago", size: "104 KB" }
    ],
    latest_transactions: [
      { hash: "0x5e1b...b8e0", from: "0x7a2d...f9e1", to: "Contract_Agri", value: "0 ETH", fee: "0.00042", timestamp: "5 secs ago", status: "Success" },
      { hash: "0x1a2b...f1a2", from: "Farmer_Lạc_Dương", to: "Lab_HCM", value: "0 ETH", fee: "0.00085", timestamp: "18 secs ago", status: "Success" },
      { hash: "0x3d4e...e5f6", from: "0xbc2a...d9e4", to: "Retail_Store", value: "0 ETH", fee: "0.00031", timestamp: "25 secs ago", status: "Success" },
      { hash: "0x9c0d...b9c0", from: "AgriLogistics_01", to: "Distribution_Center", value: "0 ETH", fee: "0.00054", timestamp: "42 secs ago", status: "Success" },
      { hash: "0x7f2a...d9c4", from: "0x4e5f...a1b2", to: "AgriChain_V3", value: "0.12 AGRI", fee: "0.00021", timestamp: "55 secs ago", status: "Success" },
      { hash: "0xa1b2...e3f4", from: "Node_Sapa_01", to: "Bridge_Main", value: "0 ETH", fee: "0.00015", timestamp: "1 min ago", status: "Success" }
    ],
    nodes: [
      { id: "VN-01", name: "AgriNode_VN_01", location: "Hà Nội", status: "Active", uptime: "99.98%", staked: "32,000 AGRI" },
      { id: "VN-02", name: "Lâm_Đồng_Core", location: "Đà Lạt", status: "Active", uptime: "99.95%", staked: "64,000 AGRI" },
      { id: "VN-03", name: "Ninh_Hoà_Safe", location: "Khánh Hòa", status: "Active", uptime: "100%", staked: "16,000 AGRI" },
      { id: "VN-04", name: "HCM_Hub_02", location: "TP. HCM", status: "Active", uptime: "99.90%", staked: "128,000 AGRI" }
    ],
    products: [
      {
        id: "yen-sao-nha-trang",
        category: "Yến Sào",
        name: "Yến Sào Tinh Chế Nha Trang Premium",
        image: "/assets/products/yen_pkg.png",
        attributes: {
          origin: "Nha Trang, Khánh Hòa",
          weight: "100g",
          purity: "99.9% Tinh Khiết",
          grade: "AAA - Thượng Hạng",
          blockchain: "AgriChain Core v3",
          smart_contract: "0x7a2d...f9e1"
        },
        sustainability: {
          score: 98,
          carbon_footprint: "0.2kg CO2e",
          water_saved: "450L",
          social_impact: "Hỗ trợ bảo tồn hang yến tự nhiên",
          ai_insight: "Dữ liệu Blockchain xác nhận sản phẩm được khai thác bền vững. Quy trình làm sạch thủ công giúp bảo tồn 100% sợi yến và dưỡng chất tự nhiên."
        },
        nodes: [
          {
            id: "node-1",
            type: 'FARM',
            title: "Khai Thác Hang Yến Tự Nhiên",
            location: "Đảo Yến, Nha Trang",
            coordinates: "12.2458° N, 109.1943° E",
            timestamp: "2026-04-10T08:30:00Z",
            documents: [
              { name: "Giấy phép khai thác #KH-882", url: "#" },
              { name: "Chứng nhận nguồn gốc hang yến", url: "#" }
            ],
            images: ["/assets/products/yen_harvest.png"],
            description: "Khai thác thủ công từ các hang yến tự nhiên trên đảo tại Nha Trang. Quy trình đảm bảo không can thiệp vào hệ sinh thái của chim yến.",
            hash: "0x8f3a74b1e4a6d9c8b2f1e0a3d5c7b9a8f2e4d6c8b0a2f4e6d8c0b2a4f6e8d0c2",
            txHash: "0x7d2a8b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a",
            blockNumber: 19482041,
            gasUsed: "21,000"
          },
          {
            id: "node-2",
            type: 'PROCESSING',
            title: "Làm Sạch Thủ Công Tinh Khiết",
            location: "Cơ sở Tinh Chế Nha Trang",
            coordinates: "12.2451° N, 109.1911° E",
            timestamp: "2026-04-12T14:20:00Z",
            documents: [
              { name: "Chứng nhận ATVSTP #AT-112", url: "#" },
              { name: "Quy trình xử lý tiệt trùng", url: "#" }
            ],
            images: ["/assets/products/yen_clean.png"],
            description: "Công nhân lành nghề thực hiện nhặt lông yến bằng tay dưới điều kiện vô trùng tuyệt đối, giữ trọn vẹn kết cấu sợi yến.",
            hash: "0x2d9ca1f3b5e7d9c1a3b5c7d9e1f3a5b7c9d1e3f5a7b9c1d3e5f7a9b1c3d5e7f9",
            txHash: "0x3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4",
            blockNumber: 19482155,
            gasUsed: "45,210"
          },
          {
            id: "node-3",
            type: 'LAB',
            title: "Kiểm Định Chất Lượng & Dinh Dưỡng",
            location: "Viện Nghiên Cứu Hải Sản",
            coordinates: "12.2475° N, 109.1966° E",
            timestamp: "2026-04-13T10:00:00Z",
            documents: [
              { name: "Kết quả phân tích Protein (62%)", url: "#" },
              { name: "Chứng nhận không chất bảo quản", url: "#" }
            ],
            images: ["/assets/products/yen_lab.png"],
            description: "Sản phẩm được phân tích hóa lý để đảm bảo hàm lượng Protein và khoáng chất đạt chuẩn thượng hạng.",
            hash: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b",
            txHash: "0x9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0",
            blockNumber: 19482289,
            gasUsed: "32,840"
          },
          {
            id: "node-4",
            type: 'RETAIL',
            title: "Đóng Gói & Niêm Phong Blockchain",
            location: "Hệ Thống AgriStore VN",
            coordinates: "10.7769° N, 106.7009° E",
            timestamp: "2026-04-15T09:00:00Z",
            documents: [
              { name: "Chứng chỉ NFT Authenticity", url: "#" },
              { name: "QR Code Seal Integrity", url: "#" }
            ],
            images: ["/assets/products/yen_pkg.png"],
            description: "Sản phẩm được đóng gói cao cấp và niêm phong bằng QR Code định danh duy nhất trên Blockchain.",
            hash: "0x5e1bd9c4a6f2b8e0d4c6a2f8b0e4d6c8a2f0b4e6d8c0a2f4b6e8d0c2a4f6b8e0",
            txHash: "0x5e1bd9c4a6f2b8e0d4c6a2f8b0e4d6c8a2f0b4e6d8c0a2f4b6e8d0c2a4f6b8e0",
            blockNumber: 19482412,
            gasUsed: "18,900"
          }
        ]
      },
      {
        id: "YEN-001",
        category: "Yến Sào",
        name: "Yến Sào Tinh Chế Nha Trang Premium (Legacy ID)",
        image: "/assets/products/yen_pkg.png",
        attributes: { origin: "Nha Trang", purity: "99.9%", grade: "AAA" },
        nodes: [] // Will map in findOne or just copy nodes
      },
      {
        id: "tra-o-long-bao-loc",
        category: "Trà Cao Cấp",
        name: "Trà Ô Long Thuần Chủng Bảo Lộc",
        image: "/assets/products/tea_pkg.png",
        attributes: {
          origin: "Bảo Lộc, Lâm Đồng",
          weight: "250g",
          grade: "Top 1% Selection",
          altitude: "1200m",
          blockchain: "AgriChain Core v3",
          smart_contract: "0x9c3d...e4a2"
        },
        sustainability: {
          score: 95,
          carbon_footprint: "0.15kg CO2e",
          water_saved: "320L",
          social_impact: "Phát triển nông nghiệp bền vững Bảo Lộc",
          ai_insight: "Vùng trồng đạt chuẩn GlobalGAP với hệ thống tưới tiêu tự động thông minh. Quy trình chế biến truyền thống giúp giữ nguyên 99% polyphenol trong trà."
        },
        nodes: [
          {
            id: "node-5",
            type: 'FARM',
            title: "Thu Hoạch Búp Trà Non Sáng Sớm",
            location: "Nông Trường Trà Bảo Lộc",
            coordinates: "11.5432° N, 107.8123° E",
            timestamp: "2026-03-20T06:00:00Z",
            documents: [
              { name: "Chứng nhận GlobalGAP #TP-771", url: "#" },
              { name: "Nhật ký canh tác hữu cơ", url: "#" }
            ],
            images: ["/assets/products/tea_harvest.png"],
            description: "Tuyển chọn những búp trà 1 tôm 2 lá tươi non nhất vào thời điểm sáng sớm khi còn đọng sương mai.",
            hash: "0x1a2bc3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2",
            txHash: "0x1a2b...f1a2",
            blockNumber: 19478102,
            gasUsed: "15,400"
          },
          {
            id: "node-6",
            type: 'PROCESSING',
            title: "Chế Biến Lên Men Bán Phần",
            location: "Nhà Máy Trà Lộc Sơn",
            coordinates: "11.5321° N, 107.8214° E",
            timestamp: "2026-03-25T10:00:00Z",
            documents: [
              { name: "Chứng nhận ISO 22000", url: "#" },
              { name: "Hồ sơ quy trình lên men", url: "#" }
            ],
            images: ["/assets/products/tea_process.png"],
            description: "Trà được làm héo, vò và lên men bán phần theo công nghệ Đài Loan truyền thống, tạo nên hương vị đặc trưng.",
            hash: "0x4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b",
            txHash: "0x4a5b...e3f4",
            blockNumber: 19479211,
            gasUsed: "28,900"
          },
          {
            id: "node-7",
            type: 'QC',
            title: "Thử Nếm & Phân Loại Thượng Hạng",
            location: "Phòng Kiểm Định Chất Lượng",
            coordinates: "11.5300° N, 107.8200° E",
            timestamp: "2026-03-28T14:00:00Z",
            documents: [
              { name: "Báo cáo thử nếm chuyên gia", url: "#" },
              { name: "Chứng nhận Grade AAA", url: "#" }
            ],
            images: ["/assets/products/tea_qc.png"],
            description: "Các chuyên gia trà thực hiện thử nếm (cupping) để phân loại và đảm bảo hương vị đạt chuẩn cao nhất trước khi đóng gói.",
            hash: "0x7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c",
            txHash: "0x7b8c...a1b2",
            blockNumber: 19480112,
            gasUsed: "12,300"
          },
          {
            id: "node-8",
            type: 'RETAIL',
            title: "Hút Chân Không & Phân Phối",
            location: "Trung Tâm Phân Phối AgriChain",
            coordinates: "10.7769° N, 106.7009° E",
            timestamp: "2026-04-05T09:00:00Z",
            documents: [
              { name: "Hồ sơ đóng gói chân không", url: "#" },
              { name: "Chứng nhận xuất xưởng", url: "#" }
            ],
            images: ["/assets/products/tea_pkg.png"],
            description: "Trà được hút chân không trong túi nhôm đặc biệt và đóng hộp thiếc cao cấp để giữ trọn vẹn hương thơm.",
            hash: "0x1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2",
            txHash: "0x1f2a...d9e4",
            blockNumber: 19481240,
            gasUsed: "22,500"
          }
        ]
      }
    ]
  };

  async getCollection(name: string): Promise<any[]> {
    return this.collections[name] || [];
  }

  async findOne(collection: string, query: Record<string, any>): Promise<any | null> {
    const list = await this.getCollection(collection);
    let item = list.find(item => 
      Object.entries(query).every(([key, value]) => item[key] === value)
    );

    // Handle legacy ID mapping
    if (!item && collection === 'products' && query.id) {
       if (query.id === 'YEN-001') return list.find(p => p.id === 'yen-sao-nha-trang');
       if (query.id === 'CAFE-002' || query.id === 'tra-o-long-bao-loc') return list.find(p => p.id === 'tra-o-long-bao-loc');
       if (query.id === 'TRA-003' || query.id === 'mat-gang-tea') return list.find(p => p.id === 'tra-o-long-bao-loc'); // Fallback for now
    }

    return item || null;
  }
}

export const db = new NoSQLSim();
