import { Injectable } from '@nestjs/common';
import { OpenAI } from 'openai';

@Injectable()
export class OpenaiService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async generateReadme(source: string): Promise<string> {
    const response = await this.openai.chat.completions.create({
      model: 'gpt-5-mini-2025-08-07',
      messages: [
        {
          role: 'system',
          content:
            'Você é um assistente especialista em documentação técnica. Gere documentações detalhadas para projetos, incluindo descrição, arquitetura, contexto, instruções de uso e exemplos de código, utilizando formatação Markdown.',
        },
        {
          role: 'user',
          content: `Crie um arquivo README.md completo para o seguinte projeto:\n\n${source}`,
        },
      ],
    });

    return response.choices[0].message.content || '';
  }
}
