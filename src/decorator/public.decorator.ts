import { SetMetadata } from '@nestjs/common';
import { APP_DECORATORS } from 'src/utils/constant';

export const Public = () => SetMetadata(APP_DECORATORS.IS_PUBLIC_KEY, true);
