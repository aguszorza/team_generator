package helpers

func Abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

func Min(x int, y int) int {
	if x < y {
		return x
	}
	return y
}
