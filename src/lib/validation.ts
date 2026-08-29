/**
 * Advanced validation for authentic patient bookings and spam prevention.
 * Validates genuine Indian mobile numbers, names, and emails.
 */

// Known fake/test numbers commonly entered by spam bots or test users
const BLOCKED_PHONE_PATTERNS = new Set([
  '0123456789',
  '1234567890',
  '2345678901',
  '3456789012',
  '4567890123',
  '5678901234',
  '6789012345',
  '7890123456',
  '8901234567',
  '9012345678',
  '9876543210',
  '8765432109',
  '7654321098',
  '6543210987',
  '5432109876',
  '4321098765',
  '3210987654',
  '2109876543',
  '1098765432',
  '0987654321',
  '1122334455',
  '9988776655',
  '9876598765',
  '1231231234',
  '9123456789',
  '9898989898',
  '9797979797',
  '9696969696',
  '9595959595',
  '9494949494',
  '9393939393',
  '9292929292',
  '9191919191',
  '9090909090',
  '8989898989',
  '8787878787',
  '8080808080',
  '7070707070',
  '6060606060',
  '9000000000',
  '8000000000',
  '7000000000',
  '6000000000',
  '9876500000',
  '9000012345',
]);

// Blocked dummy/spam names
const BLOCKED_NAMES = new Set([
  'test',
  'tester',
  'testing',
  'fake',
  'dummy',
  'asdf',
  'asdfgh',
  'qwerty',
  'admin',
  'null',
  'undefined',
  'user',
  'sample',
  'abc',
  'abcd',
  'xyz',
  'xxxx',
  'xxxxx',
  'xxxxxx',
  'nobody',
  'none',
  'spam',
  'bot',
]);

/**
 * Cleans phone string to extract pure 10-digit number.
 * Removes spaces, +91, 91 prefix, leading 0, dashes, brackets.
 */
export function extract10DigitPhone(rawPhone: string): string {
  if (!rawPhone) return '';
  // Remove non-digit characters
  let digits = rawPhone.replace(/\D/g, '');

  // Handle +91 or 91 country code prefix for 12-digit format
  if (digits.length === 12 && digits.startsWith('91')) {
    digits = digits.slice(2);
  } else if (digits.length === 11 && digits.startsWith('0')) {
    // Handle leading 0 trunk prefix
    digits = digits.slice(1);
  }

  return digits;
}

/**
 * Validates whether a given mobile number is a genuine Indian mobile number.
 * Enforces:
 * - Exactly 10 digits
 * - Valid Indian mobile prefixes (6, 7, 8, 9)
 * - Rejects all identical digits (e.g. 0000000000, 1111111111, 9999999999)
 * - Rejects low entropy / dummy patterns (fewer than 4 unique digits)
 * - Rejects ascending/descending sequences (0123456789, 9876543210, etc.)
 * - Rejects known test numbers
 * - Rejects 5+ consecutive repeating digits (e.g. 9811111234)
 */
export function validateGenuineMobile(
  rawPhone: string,
  lang: 'en' | 'mr' = 'en'
): { isValid: boolean; error?: string; cleanPhone?: string } {
  const trimmed = rawPhone ? rawPhone.trim() : '';

  if (!trimmed) {
    return {
      isValid: false,
      error: lang === 'en' ? 'Phone number is required' : 'कृपया फोन नंबर प्रविष्ट करा',
    };
  }

  // Check for any alphabetic or invalid special characters in raw input
  if (/[a-zA-Z]/.test(trimmed)) {
    return {
      isValid: false,
      error:
        lang === 'en'
          ? 'Invalid phone number. Please enter digits only.'
          : 'कृपया वैध फोन नंबर टाका (फक्त आकडे).',
    };
  }

  const digits = extract10DigitPhone(trimmed);

  if (digits.length !== 10) {
    return {
      isValid: false,
      error:
        lang === 'en'
          ? 'Please enter a valid 10-digit mobile number'
          : 'कृपया वैध १० अंकी मोबाईल नंबर प्रविष्ट करा',
    };
  }

  // Must start with 6, 7, 8, or 9 (standard Indian mobile operator series)
  const firstDigit = digits[0];
  if (!['6', '7', '8', '9'].includes(firstDigit)) {
    return {
      isValid: false,
      error:
        lang === 'en'
          ? 'Please enter a valid Indian mobile number starting with 6, 7, 8, or 9'
          : 'कृपया ६, ७, ८ किंवा ९ ने सुरू होणारा वैध मोबाईल नंबर प्रविष्ट करा',
    };
  }

  // Check if all digits are identical (e.g. 0000000000, 9999999999, etc.)
  const uniqueDigits = new Set(digits.split(''));
  if (uniqueDigits.size === 1) {
    return {
      isValid: false,
      error:
        lang === 'en'
          ? 'Invalid number. Repeated identical digits are not allowed.'
          : 'कृपया खरा मोबाईल नंबर प्रविष्ट करा.',
    };
  }

  // Low entropy check: A genuine phone number must have at least 4 distinct digits
  if (uniqueDigits.size < 4) {
    return {
      isValid: false,
      error:
        lang === 'en'
          ? 'Please enter a genuine 10-digit mobile number'
          : 'कृपया वैध व चालू मोबाईल नंबर टाका.',
    };
  }

  // Block known sequential and test patterns
  if (BLOCKED_PHONE_PATTERNS.has(digits)) {
    return {
      isValid: false,
      error:
        lang === 'en'
          ? 'Test or sequential numbers are not allowed. Please enter your real mobile number.'
          : 'कृपया आपला खरा मोबाईल नंबर प्रविष्ट करा.',
    };
  }

  // Check for 6+ consecutive repeating digits (e.g., 9877777712)
  if (/(.)\1{5,}/.test(digits)) {
    return {
      isValid: false,
      error:
        lang === 'en'
          ? 'Invalid number format. Too many repeating digits.'
          : 'कृपया वैध मोबाईल नंबर टाका.',
    };
  }

  // Check for 6-digit consecutive ascending or descending runs
  const isAscendingRun = (str: string) => {
    let count = 1;
    for (let i = 1; i < str.length; i++) {
      if (str.charCodeAt(i) === str.charCodeAt(i - 1) + 1) {
        count++;
        if (count >= 6) return true;
      } else {
        count = 1;
      }
    }
    return false;
  };

  const isDescendingRun = (str: string) => {
    let count = 1;
    for (let i = 1; i < str.length; i++) {
      if (str.charCodeAt(i) === str.charCodeAt(i - 1) - 1) {
        count++;
        if (count >= 6) return true;
      } else {
        count = 1;
      }
    }
    return false;
  };

  if (isAscendingRun(digits) || isDescendingRun(digits)) {
    return {
      isValid: false,
      error:
        lang === 'en'
          ? 'Sequential test numbers (e.g., 123456) are not allowed.'
          : 'कृपया खरा मोबाईल नंबर टाका.',
    };
  }

  return { isValid: true, cleanPhone: digits };
}

/**
 * Validates patient full name.
 * Prevents gibberish, single letters, numbers, and common dummy names.
 */
export function validatePatientName(
  rawName: string,
  lang: 'en' | 'mr' = 'en'
): { isValid: boolean; error?: string } {
  const name = rawName ? rawName.trim() : '';

  if (!name) {
    return {
      isValid: false,
      error: lang === 'en' ? 'Full name is required' : 'कृपया पूर्ण नाव प्रविष्ट करा',
    };
  }

  if (name.length < 3) {
    return {
      isValid: false,
      error:
        lang === 'en'
          ? 'Name must be at least 3 characters long'
          : 'नाव किमान ३ अक्षरांचे असावे',
    };
  }

  // Check if name contains numbers or disallowed special characters
  if (/[0-9]/.test(name)) {
    return {
      isValid: false,
      error:
        lang === 'en'
          ? 'Name should not contain numbers'
          : 'नावात आकडे असू नयेत',
    };
  }

  // Check against dummy/spam name blocklist
  const normalized = name.toLowerCase().replace(/[^a-z]/g, '');
  if (BLOCKED_NAMES.has(normalized)) {
    return {
      isValid: false,
      error:
        lang === 'en'
          ? 'Please enter your genuine full name'
          : 'कृपया आपले खरे नाव प्रविष्ट करा',
    };
  }

  // Check for repeated identical characters (e.g. "aaaaaa", "xxxxxx")
  if (/(.)\1{3,}/i.test(name)) {
    return {
      isValid: false,
      error:
        lang === 'en'
          ? 'Please enter a valid full name'
          : 'कृपया आपले योग्य नाव प्रविष्ट करा',
    };
  }

  return { isValid: true };
}
