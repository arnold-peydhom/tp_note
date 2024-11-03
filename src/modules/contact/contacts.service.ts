import { Injectable } from '@nestjs/common';
import { DrizzleService } from 'src/database/drizzle.service';
import { contacts, users } from 'src/database/database-schema';
import { eq, sql } from 'drizzle-orm';


@Injectable()
export class ContactsService {

    constructor(private readonly drizzleService: DrizzleService) { }

    async createContact(contact_name: string, phone_number: string, email: string, address: string, notes: string) {
        const newContact = await this.drizzleService.db.insert(contacts).values({ contact_name, phone_number, email, address, notes }).returning();
        return newContact;
    }

    async getContacts(userId: string, page: number = 1, limit: number = 10) {
        const offset = (page - 1) * limit;
        return await this.drizzleService.db
            .select()
            .from(contacts)
            .where(contacts.contact_id.equals(userId))
            .offset(offset)
            .limit(limit);
    }

    async getContactById(id: string) {
        return await this.drizzleService.db.query.contacts.findFirst({ where: eq(contacts.id, id) });
    }

    async updateContact(id: string, data: Partial<{ name: string; phone_number?: string; email?: string; address?: string; notes?: string }>) {
        return await this.drizzleService.db.update(contacts).set(data).where(eq(contacts.id, id)).returning();
    }

    async deleteContact(id: string) {
        const deletedContact = await this.drizzleService.db.delete(contacts).where(eq(contacts.id, id)).returning();
        return deletedContact;
    }

    async getUserContacts(userId: string) {
        return await this.drizzleService.db.select().from(contacts).where(contacts.contact_id.equals(userId));
    }

    async getUserWithContacts(userId: string) {
        const userWithContacts = await this.drizzleService.db
            .select(users)
            .where(users.id.equals(userId))
            .include({ contacts: true });
        return userWithContacts;
    }

}