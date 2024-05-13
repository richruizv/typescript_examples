// ok, by default TypeScript will assign auto incrementing values
enum GoodDirection {
    Up = 1,
    Down,
    Left,
    Right
}

// we are assigning a string, so we need to define all the values
enum BadDirection {
    Up = '1',
    Down,
    Left,
    Right
}

// enums can be mixed
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
  }