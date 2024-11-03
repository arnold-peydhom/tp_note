import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDto {
  @ApiProperty({ description: 'Nom du contact' })
  contact_name: string;

  @ApiProperty({ description: 'Numéro de téléphone du contact' })
  phone_number: string;

  @ApiProperty({ description: 'Adresse email du contact' })
  email: string;

  @ApiProperty({ description: 'Adresse du contact' })
  address: string;

  @ApiProperty({ description: 'Notes additionnelles' })
  notes: string;

  // @IsEmail({}, { message: 'Adresse email invalide' })
  // email: string;

  // @IsNotEmpty({ message: 'Le nom du contact est requis' })
  // contact_name: string;

}

