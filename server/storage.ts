import { db } from "./db";
import {
  equipment,
  inquiries,
  type InsertEquipment,
  type InsertInquiry,
  type Equipment,
  type Inquiry
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getEquipment(): Promise<Equipment[]>;
  getEquipmentItem(id: number): Promise<Equipment | undefined>;
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  // Seed method
  createEquipment(item: InsertEquipment): Promise<Equipment>;
}

export class DatabaseStorage implements IStorage {
  async getEquipment(): Promise<Equipment[]> {
    return await db.select().from(equipment);
  }

  async getEquipmentItem(id: number): Promise<Equipment | undefined> {
    const [item] = await db.select().from(equipment).where(eq(equipment.id, id));
    return item;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<Inquiry> {
    const [newInquiry] = await db.insert(inquiries).values(insertInquiry).returning();
    return newInquiry;
  }

  async createEquipment(insertItem: InsertEquipment): Promise<Equipment> {
    const [item] = await db.insert(equipment).values(insertItem).returning();
    return item;
  }
}

export const storage = new DatabaseStorage();
