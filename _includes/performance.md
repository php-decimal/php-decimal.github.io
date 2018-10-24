## Performance

A new project is never complete without some benchmarks against existing solutions.
We will use the [bcmath]() extension for the comparison because it is often the goto
for decimal calculations. It is difficult to benchmark fairly here, because *bcmath*
accepts and returns string values. Due to decimals not using strings internally,
the conversion cost must also be considered in the benchmark.

The requirement for each candidate in the benchmark is to perform calculations on `string` and `int` values,
then convert the result to a string at the very end. While this does not represent
cases where a single operation is performed and exported, the goal is to simulate a realistic workflow where
a number is instantiated, used in a few calculations, and exported at the end.

It is difficult to determine what to use for the **scale** of bcmath, because it specifies
the number of places behind the decimal point, rather than the **precision**, which is the total
number of significant places. This benchmark is therefore arbitrary in itself and serves only to provide a
rough idea of what to expect.

The code for this basic benchmark can be found [here](). Results shown are the total runtime to produce
a result across many iterations, in seconds. **Lower is better**.

#### Results

{:.benchmark-table}
|-------------------------+------------+--------------+--------------+--------------+--------------|
|                         |  Type      | Add          | Subtract     | Multiply     | Divide       |
|:------------------------|:-----------|-------------:|-------------:|-------------:|-------------:|
| `bcmath`                | `string`   | `1.71485`    | `1.74604`    | `3.23237`    | `12.97111`   |
| `Decimal`               | `string`   | `1.44537`    | `1.43727`    | `1.47056`    | `2.10754`    |
| `bcmath`                | `int`      | `2.08831`    | `2.04289`    | `2.70669`    | `5.71860`    |
| `Decimal`               | `int`      | `0.91329`    | `0.90199`    | `0.98800`    | `1.64784`    |
|-------------------------+------------+--------------+--------------+--------------+--------------|
