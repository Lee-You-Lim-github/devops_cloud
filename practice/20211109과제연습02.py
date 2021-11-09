def base(bass_number):
    def wrap(fn):
        def inner(x, y):
            return fn(x, y) + bass_number  # fn(x, y) = mysum2(x, y)

        return inner

    return wrap


@base(10)
def mysum2(x, y):
    return x + y


print(mysum2(1, 2))
