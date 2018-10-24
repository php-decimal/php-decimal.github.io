This library provides a PHP extension that adds support for arbitrary-precision decimal floating point arithmetic, as an alternative to other solutions like [bcmath](http://php.net/manual/en/book.bc.php).

The extension uses the same internal C library as Python's [decimal](https://docs.python.org/3/library/decimal.html), called [mpdecimal](http://www.bytereef.org/mpdecimal/).

The decimal extension offers several advantages over the `float` data type:
- All rational numbers can be represented accurately. In contrast, numbers like `0.2` do not have exact representations in binary floating point because there are no integer solutions to $$a * 2^b = 0.2$$.  While a binary floating point value of `0.2` comes close, the difference prevents reliable equality testing, and inaccuracy may accumulate over multiple calculations.
- Arbitrary precision allows for numbers that are not bound by the same upper and lower limits as `float`. Numbers can be as big or small as required.
- PHP does a good job of hiding the inaccuracies of binary floating point representation. By default, `0.1 + 0.2` will display as `0.3` even though the internal C `double` can not represent the result accurately. For example:

{% highlight php %}
var_dump(0.1 + 0.2);        // float(0.3)
var_dump(0.1 + 0.2 - 0.3);  // float(5.5511151231258E-17)
{% endhighlight %}

There are also advantages over [bcmath](http://php.net/manual/en/book.bc.php):
- Decimal values are objects, so you can typehint `Decimal` instead of `string`.
- Arithmetic and comparison operators are supported.
- *Precision* is the number of significant figures, and *scale* the number of digits behind the decimal point. This means that a number like `1.23E-1000` would require a scale of `1002` but a precision of only `3`. This library uses precision; [bcmath](http://php.net/manual/en/book.bc.php) uses scale.
- Scientific form is supported, so you can use `"1.23E-1000"` to construct a decimal. As of PHP 7.3 you can not do this with [bcmath](http://php.net/manual/en/book.bc.php).
- Significantly faster. See [#performance](#performance).

This is not an attempt to discredit the authors of [bcmath](http://php.net/manual/en/book.bc.php), but instead to highlight the reasons why a project might consider using this library as an alternative solution.


