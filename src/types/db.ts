import { Application } from './application';
import { Certificate } from './certificate';
import { DeploymentRequest } from './deployment';
import { Document } from './document';
import { User } from './auth';

export interface PasswordResetToken {
  id: string;
  token: string;
  userId: string;
  expiresAt: Date;
  createdAt: Date;
}

export interface Database {
  applications: Map<string, Application>;
  certificates: Map<string, Certificate>;
  deployments: Map<string, DeploymentRequest>;
  documents: Map<string, Document>;
  users: Map<string, User>;
  passwordResetTokens: Map<string, PasswordResetToken>;
} 