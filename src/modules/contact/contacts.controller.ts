import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CreateContactDto } from './dto/create-contact.dto';
import { number } from 'joi';
import { RolesGuard } from 'src/guards/role.guard';

@ApiTags('Contacts')
@ApiBearerAuth()  // Exige un token Bearer pour accéder aux routes
@UseGuards(AuthGuard('jwt'), RolesGuard)  // Protéger les routes avec AuthGuard JWT
@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Get()
  @Roles('user', 'admin')  // Accessible par tous les utilisateurs authentifiés
  getAllContacts() {
    return this.contactsService.getContacts();
  }

  @Get()
  @ApiOperation({ summary: 'Obtenir les contacts paginés et filtrés' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  async getPaginatedContacts(@Query('page') page: number = 1, @Query('limit') limit: number = 10, @Req() req) {
    const userId = req.user.userId; // Récupère l'ID utilisateur depuis le token JWT
    return this.contactsService.getContacts(userId, page, limit);
  }

  @Post()
  @ApiOperation({ summary: 'Créer un nouveau contact' })
  @ApiBody({ type: CreateContactDto })
  @ApiResponse({ status: 201, description: 'Contact créé avec succès.' })
  createContact(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.createContact(createContactDto);
  }



  @Get(':id')
  getContactById(@Param('id') id: number) {
    return this.contactsService.getContactById(id);
  }

  @Patch(':id')
  updateContact(@Param('id') id: number, @Body() data) {
    return this.contactsService.updateContact(id, data);
  }

  @Delete(':id')
  @Roles('admin')  // Accessible uniquement aux admins
  deleteContact(@Param('id') id: string) {
    return this.contactsService.deleteContact(id);
  }
}


