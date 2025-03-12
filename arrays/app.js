const calculater = () => {
	a = +prompt('a?', 0)
	b = +prompt('b?', 0)
	operand = prompt('Введите действие')
	if(operand === '+') {
		return alert(a+b)
	}
	if(operand === '/') {
		return alert(a/b)
	}
	if(operand === '-') {
		return alert(a-b)
	}
	if(operand === '*') {
		return alert(a*b)
	}
}

calculater()