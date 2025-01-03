import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type === 'body' && typeof value !== 'object') {
      throw new BadRequestException('В качестве типа ожидался объект');
    }

    if (!value.title || typeof value.title !== 'string') {
      throw new BadRequestException(
        'Поле "Название" обязательно и должно быть строкой',
      );
    }

    if (value.author && typeof value.author !== 'string') {
      throw new BadRequestException(
        'Поле "Автор" обязательно и должно быть строкой',
      );
    }

    return value;
  }
}
