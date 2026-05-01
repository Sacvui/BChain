/**
 * NoSQL-style Storage Simulation
 * This module provides a simple interface to manage dynamic agricultural product data.
 */

export interface BlockchainNode {
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
  attributes: Record<string, any>;
  nodes: BlockchainNode[];
}

class NoSQLSim {
  private collections: Record<string, any[]> = {
    products: [
      {
        id: "YEN-001",
        category: "Yến Sào",
        name: "Yến Sào Tinh Chế Thượng Hạng",
        attributes: {
          origin: "Khánh Hòa",
          weight: "100g",
          purity: "99.9%",
          grade: "AAA"
        },
        nodes: [
          {
            type: 'FARM',
            title: "Nhà Yến Ninh Hòa",
            location: "Ninh Hòa, Khánh Hòa",
            coordinates: "12.4844° N, 109.1309° E",
            timestamp: "2026-04-10T08:30:00Z",
            documents: [{ name: "Giấy phép khai thác", url: "#" }],
            images: ["https://images.unsplash.com/photo-1590402444816-a1284b33e1d1?w=400&q=80"],
            description: "Thu hoạch từ hệ thống nhà yến đạt chuẩn bảo tồn tự nhiên.",
            hash: "0x8f3a...e4b1"
          },
          {
            type: 'LAB',
            title: "Trung Tâm Kiểm Định NCS",
            location: "Quận 1, TP.HCM",
            coordinates: "10.7769° N, 106.7009° E",
            timestamp: "2026-04-12T14:20:00Z",
            documents: [{ name: "Kết quả kiểm tra độ đạm", url: "#" }],
            images: ["https://images.unsplash.com/photo-1579152276502-745f4685c807?w=400&q=80"],
            description: "Phân tích hàm lượng protein và độ tinh khiết.",
            hash: "0x2d9c...a1f3"
          },
          {
            type: 'RETAIL',
            title: "Showroom Premium",
            location: "Quận 3, TP.HCM",
            coordinates: "10.7825° N, 106.6836° E",
            timestamp: "2026-04-15T09:00:00Z",
            documents: [{ name: "Chứng nhận phân phối", url: "#" }],
            images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80"],
            description: "Sản phẩm đã có mặt tại cửa hàng bán lẻ chính hãng.",
            hash: "0x5e1b...d9c4"
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
            type: 'FARM',
            title: "Farm Cầu Đất",
            location: "Xuân Trường, Đà Lạt",
            coordinates: "11.8544° N, 108.5309° E",
            timestamp: "2026-03-20T07:00:00Z",
            documents: [{ name: "Chứng nhận Organic", url: "#" }],
            images: ["https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&q=80"],
            description: "Thu hoạch thủ công tại vùng nguyên liệu cao 1600m.",
            hash: "0x1a2b...c3d4"
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
