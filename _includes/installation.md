## Installation

#### Dependencies

- PHP 7
- [libmpdec 2.4+](http://www.bytereef.org/mpdecimal/quickstart.html)

#### Composer

Composer can not be used to install the extension. The `php-decimal/php-decimal` package can be used to specify the extension as a dependency and provides stubs for IDE integration. If you are using Composer and would like to add this extension as a dependency, require `php-decimal/php-decimal`.

#### Install

The easiest way to install the extension is to use PECL:

```bash
pecl install decimal
```

If you are using [phpbrew](https://github.com/phpbrew/phpbrew):

```bash
phpbrew ext install decimal
phpbrew ext enable  decimal
```

#### Enable

Remember to enable to extension in your *.ini* file.

```bash
extension=decimal.so        # Unix, OS X
extension=php_decimal.dll   # Windows
```

#### Verify

You can confirm that the extension is installed with `php --re decimal`.
