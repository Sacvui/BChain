/**
 * NoSQL-style Storage Simulation
 * This module provides a simple interface to manage dynamic agricultural product data.
 */

export interface BlockchainNode {
  id?: string;
  type: 'FARM' | 'LAB' | 'PROCESSING' | 'LOGISTICS' | 'RETAIL';
  title: string;
  location: string;
  coordinates: string;
  timestamp: string;
  documents: { name: string; url: string }[];
  images: string[];
  description: string;
  hash: string;
}

export interface Product {
  id: string;
  category: string;
  name: string;
  image?: string;
  attributes: Record<string, any>;
  sustainability?: {
    score: number;
    carbon_footprint: string;
    water_saved: string;
    social_impact: string;
    ai_insight: string;
  };
  nodes: BlockchainNode[];
}

class NoSQLSim {
  private collections: Record<string, any[]> = {
    products: [
      {
        id: "YEN-001",
        category: "Yến Sào",
        name: "Yến Sào Tinh Chế Thượng Hạng",
        image: "/assets/packaging.png",
        attributes: {
          origin: "Khánh Hòa",
          weight: "100g",
          purity: "99.9%",
          grade: "AAA",
          blockchain: "Ethereum (ERC-721)",
          smart_contract: "0x7a2d...f9e1"
        },
        sustainability: {
          score: 98,
          carbon_footprint: "0.2kg CO2e",
          water_saved: "450L",
          social_impact: "Tạo 50 việc làm địa phương",
          ai_insight: "Dựa trên phân tích từ Blockchain, sản phẩm này đạt tiêu chuẩn khai thác bền vững. Quy trình không sử dụng hóa chất và bảo tồn hệ sinh thái hang yến tự nhiên tại Ninh Hòa."
        },
        nodes: [
          {
            id: "node-1",
            type: 'FARM',
            title: "Nhà Yến Ninh Hòa",
            location: "Ninh Hòa, Khánh Hòa",
            coordinates: "12.4844° N, 109.1309° E",
            timestamp: "2026-04-10T08:30:00Z",
            documents: [{ name: "Giấy phép khai thác", url: "#" }],
            images: ["https://images.unsplash.com/photo-1590402444816-a1284b33e1d1?w=400&q=80"],
            description: "Thu hoạch từ hệ thống nhà yến đạt chuẩn bảo tồn tự nhiên.",
            hash: "0x8f3a74b1e4a6d9c8b2f1e0a3d5c7b9a8f2e4d6c8b0a2f4e6d8c0b2a4f6e8d0c2"
          },
          {
            id: "node-2",
            type: 'LAB',
            title: "Trung Tâm Kiểm Định NCS",
            location: "Quận 1, TP.HCM",
            coordinates: "10.7769° N, 106.7009° E",
            timestamp: "2026-04-12T14:20:00Z",
            documents: [{ name: "Kết quả kiểm tra độ đạm", url: "#" }],
            images: ["https://images.unsplash.com/photo-1579152276502-745f4685c807?w=400&q=80"],
            description: "Phân tích hàm lượng protein và độ tinh khiết.",
            hash: "0x2d9ca1f3b5e7d9c1a3b5c7d9e1f3a5b7c9d1e3f5a7b9c1d3e5f7a9b1c3d5e7f9"
          },
          {
            id: "node-3",
            type: 'LOGISTICS',
            title: "Vận Chuyển Lạnh Đảm Bảo",
            location: "Kho Phân Phối Cát Lái",
            coordinates: "10.7625° N, 106.7536° E",
            timestamp: "2026-04-13T09:00:00Z",
            documents: [{ name: "Biên bản bàn giao", url: "#" }],
            images: ["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80"],
            description: "Đóng gói và vận chuyển nhiệt độ chuẩn < 15 độ C.",
            hash: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b"
          },
          {
            id: "node-4",
            type: 'RETAIL',
            title: "Showroom Premium",
            location: "Quận 3, TP.HCM",
            coordinates: "10.7825° N, 106.6836° E",
            timestamp: "2026-04-15T09:00:00Z",
            documents: [{ name: "Chứng nhận phân phối", url: "#" }],
            images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80"],
            description: "Sản phẩm đã có mặt tại cửa hàng bán lẻ chính hãng.",
            hash: "0x5e1bd9c4a6f2b8e0d4c6a2f8b0e4d6c8a2f0b4e6d8c0a2f4b6e8d0c2a4f6b8e0"
          }
        ]
      },
      {
        id: "CAFE-002",
        category: "Cà Phê",
        name: "Cà Phê Arabica Cầu Đất",
        attributes: {
          origin: "Đà Lạt, Lâm Đồng",
          roast: "Medium",
          altitude: "1600m",
          process: "Honey Process"
        },
        nodes: [
          {
            id: "node-5",
            type: 'FARM',
            title: "Farm Cầu Đất",
            location: "Xuân Trường, Đà Lạt",
            coordinates: "11.8544° N, 108.5309° E",
            timestamp: "2026-03-20T07:00:00Z",
            documents: [{ name: "Chứng nhận Organic", url: "#" }],
            images: ["https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&q=80"],
            description: "Thu hoạch thủ công tại vùng nguyên liệu cao 1600m.",
            hash: "0x1a2bc3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2"
          },
          {
            id: "node-6",
            type: 'PROCESSING',
            title: "Xưởng Rang Xay",
            location: "Khu Công Nghiệp Lộc Sơn",
            coordinates: "11.5321° N, 107.8214° E",
            timestamp: "2026-03-25T10:00:00Z",
            documents: [{ name: "Hồ sơ rang xay", url: "#" }],
            images: ["https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&q=80"],
            description: "Rang theo profile Medium Roast, phát triển hương vị hoa quả.",
            hash: "0x4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b"
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
    return list.find(item => 
      Object.entries(query).every(([key, value]) => item[key] === value)
    ) || null;
  }
}

export const db = new NoSQLSim();
