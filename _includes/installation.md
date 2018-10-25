## Installation

#### Dependencies

- PHP 7
- libmpdec 2.4

The extension relies on a system install of libmpdec, which can be found [here](http://www.bytereef.org/mpdecimal/download.html).

For those of you running Ubuntu:

```bash
sudo apt-get install libmpdec-dev
```

#### Install

The easiest way to install the extension is to use PECL:

```bash
pecl install decimal
```

#### Build

If you would like to build the extension manually, you will need to have build
tools, a development version of PHP, and libmpdec installed before attempting to build the extension.

```bash
sudo apt-get install build-essential autoconf libmpdec-dev
```

```bash
phpize
./configure
make
sudo make install
```

#### Enable

Remember to enable to extension in your *.ini* file.

```bash
extension=decimal.so        # Unix, OS X
extension=php_decimal.dll   # Windows
```

#### Composer

Installing the extension itself can not be done with Composer, but it is highly
recommended to add the `php-decimal/php-decimal` package to your dependencies. This
package enforces `ext-decimal` as a dependency and provides stubs for IDE integration.

#### Verify

You can confirm that the extension is installed by using `php --re decimal`.
