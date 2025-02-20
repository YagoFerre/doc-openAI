import { Injectable } from '@nestjs/common';
import { OpenaiService } from './openai.service';

import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class DocumentationService {
  constructor(private readonly openaiService: OpenaiService) {}

  async generateDocumentation(source: string): Promise<string> {
    if (!fs.existsSync(source)) {
      throw new Error('Diretório não encontrado.');
    }

    const projectStructure = this.readProjectFiles(source);

    const documentation =
      await this.openaiService.generateReadme(projectStructure);

    fs.writeFileSync(path.join(source, 'README.md'), documentation);

    return documentation;
  }

  private readProjectFiles(source: string): string {
    const ignoredFolders = ['node_modules', 'target', 'dist', '.git', 'build'];
    let content = '';

    const readDirectory = (dir: string) => {
      fs.readdirSync(dir).forEach((file) => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory() && !ignoredFolders.includes(file)) {
          readDirectory(fullPath);
        } else if (
          stat.isFile() &&
          /\.(java|ts|js|json|yml|yaml|md|xml)$/i.test(file)
        ) {
          content += `### ${file}\n${fs.readFileSync(fullPath, 'utf-8').substring(0, 1000)}\n\n`;
        }
      });
    };

    readDirectory(source);
    return content;
  }
}
