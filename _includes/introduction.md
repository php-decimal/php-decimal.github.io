This library provides a PHP extension that adds support for correctly-rounded, arbitrary-precision decimal floating point arithmetic. Applications that rely on accurate numbers (ie. money, measurements, or mathematics) can use `Decimal` instead of `float` or `string` to represent numerical values.

The implementation uses the same arbitrary precision library as Python's [decimal](https://docs.python.org/3/library/decimal.html), called [mpdecimal](http://www.bytereef.org/mpdecimal/).

The decimal extension offers several advantages over the `float` data type:
- All rational numbers can be represented accurately. In contrast, numbers like `0.2` do not have exact representations in binary floating point. You can read more about this in [the floating point guide](https://floating-point-gui.de/) or in PHP's [documentation](http://php.net/manual/en/language.types.float.php).
- While a binary floating point value like `0.2` comes close, the small difference prevents reliable equality testing, and inaccuracies may accumulate over time.
- Arbitrary precision allows for numbers that are not bound by the same upper and lower limits as `float` - numbers can be as big or small as required.
- PHP does a good job of hiding the inaccuracies of binary floating point representation with the [precision](http://php.net/manual/en/ini.core.php#ini.precision) INI setting. By default, `0.1 + 0.2` will have a string value of `0.3` even though the internal C `double` can not represent the result accurately. For example:

```php
var_dump(0.1 + 0.2);        // float(0.3)
var_dump(0.1 + 0.2 - 0.3);  // float(5.5511151231258E-17)
```

> PHP already has arbitrary precision math functions...

The current goto answer for arbitrary precision math in PHP is [bcmath](http://php.net/manual/en/book.bc.php). However, the `Decimal` class offers multiple advantages over *bcmath*:
- Decimal values are objects, so you can typehint `Decimal` instead of `string`.
- Arithmetic and comparison operators are supported.
- *Precision* is defined as the number of significant figures, and *scale* is the number of digits behind the decimal point. This means that a number like `1.23E-1000` would require a scale of `1002` but a precision of `3`. This library uses precision; *bcmath* uses scale.
- Scientific notation is supported, so you can use strings like `"1.23E-1000"` to construct a `Decimal`. At the time of this writing, you can not do this with *bcmath*.
- Calculations are significantly faster. See [#performance](#performance) for some benchmarks.
