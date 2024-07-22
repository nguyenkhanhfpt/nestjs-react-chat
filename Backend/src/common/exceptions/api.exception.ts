import { HttpException, HttpStatus } from '@nestjs/common';

export const responseError = function(
  code: number,
  data?: object,
  message?: string,
  httpCode?: number
) {
  throw new HttpException({
    status: code || HttpStatus.BAD_REQUEST,
    error: message || 'Error',
    data: data || null
  }, httpCode || HttpStatus.BAD_REQUEST)
}