## Performance

The benchmark performs calculations on `string` and `int` values, then converts the result to a string at the very end. While this does not represent cases where a single operation is performed and exported, the goal is to simulate a realistic workflow where a number is created, used in a few calculations, and exported at the end.

It is difficult to determine what to use for the **scale** of *bcmath*, because it specifies
the number of places behind the decimal point, rather than the **precision**, which is the total
number of significant places. This benchmark is therefore arbitrary in itself and serves only to provide a rough idea of what to expect.

The code for this basic benchmark can be found [here](https://github.com/php-decimal/benchmarks).

Results are the total runtime to produce a result across many iterations, in seconds. **Lower is better**.

#### Results

{:.benchmark-table}
|-------------------------+------------+--------------+--------------+--------------+--------------|
|                         |  Type      | Add          | Subtract     | Multiply     | Divide       |
|:------------------------|:-----------|-------------:|-------------:|-------------:|-------------:|
| `bcmath`                | `string`   | `3.552`      | `3.662`      | `6.7272`    | `25.8195`     |
| `Decimal`               | `string`   | `2.5652`     | `2.6048`     | `2.5794`    | `5.3271`      |
| `bcmath`                | `int`      | `4.2136`     | `4.2002`     | `5.5506`    | `11.5603`     |
| `Decimal`               | `int`      | `1.6846`     | `1.6523`     | `1.7213`    | `4.778`       |
|-------------------------+------------+--------------+--------------+--------------+--------------|
