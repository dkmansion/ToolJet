import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationUser } from '../../entities/organization_user.entity';
import { Organization } from '../../entities/organization.entity';
import { User } from '../../entities/user.entity';
import { OrganizationsService } from '@services/organizations.service';
import { OrganizationUsersService } from '@services/organization_users.service';
import { OrganizationsController } from '@controllers/organizations.controller';
import { OrganizationUsersController } from '@controllers/organization_users.controller';
import { UsersService } from 'src/services/users.service';
import { CaslModule } from '../casl/casl.module';
import { EmailService } from '@services/email.service';
import { GroupPermission } from 'src/entities/group_permission.entity';
import { App } from 'src/entities/app.entity';
import { AuditLoggerService } from '@services/audit_logger.service';
import { AuditLog } from 'src/entities/audit_log.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Organization, OrganizationUser, User, GroupPermission, App, AuditLog]),
    CaslModule,
  ],
  providers: [OrganizationsService, OrganizationUsersService, UsersService, EmailService, AuditLoggerService],
  controllers: [OrganizationsController, OrganizationUsersController],
})
export class OrganizationsModule {}
