import { Result } from '@inh-lib/common';
import { ValueObject } from '@inh-lib/ddd';
import { isPhoneNo } from '../utils/isPhoneNo';

export interface PhoneNoVOProps {
  phoneNo: string;
}

export class PhoneNoVO extends ValueObject<PhoneNoVOProps> {

  public static createVO(props: PhoneNoVOProps): Result<PhoneNoVO> {
    if (isPhoneNo(props.phoneNo)) {
      const vo = new PhoneNoVO(props);
      return Result.ok<PhoneNoVO>(vo);
    }
    return Result.fail<PhoneNoVO>('invalid phone no. format');
  }

}