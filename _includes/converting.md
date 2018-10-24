## Converting

Decimal objects can be converted to `string`, `int`, and `float`.

{% include method.md method=site.data.methods.toInt %}
{% include method.md method=site.data.methods.toFloat %}
{% include method.md method=site.data.methods.toString %}


### Casting

You can also cast a decimal to `string`, `float`, `int` and `bool`.

{% highlight php %}
use Decimal\Decimal;

(bool)   new Decimal();      // true, by convention
(bool)   new Decimal(1);     // true
(int)    new Decimal("1.5"); // 1
(float)  new Decimal("1.5"); // 1.5
(string) new Decimal("1.5"); // 1.5
{% endhighlight %}

**Important**: `(string)` or `toString` should not be used to produce a canonical
representation of a decimal, because there is more than one way to represent the
same value, and precision is not represented by the value itself. However, it is
guaranteed that the string representation of a decimal can be used to construct
a new decimal with the exact same value, assuming equal precision. If you want to
store a decimal with its precision, you should use `serialize` and `unserialize`.
