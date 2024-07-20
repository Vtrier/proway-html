def ex01():
    numero = int(input("Informe um número inteiro: "))

    if numero < 0:
        print("O número é negativo")
    
    elif numero > 0:
        print("O número é positivo")

    else:
        print("O número é igual a zero")
        
def ex02():
    idade = int(input("Informe sua idade: "))

    if idade >= 18:
        print("Você é maior de idade")
    
    elif 0 < idade < 18:
        print("Você é menor de idade")
    
    else:
        print("Idade inválida")
        
def ex03():
    n1 = int(input("Digite um número: "))
    n2 = int(input("Digite outro número: "))
    n3 = int(input("Digite mais um número: "))
    
    print("Numero mais alto: {}".format(max(n1, n2, n3)))
    print("Numero mais baixo: {}".format(min(n1, n2, n3)))
    
def ex04():
    n1 = int(input("Primeiro número: "))
    n2 = int(input("Segundo número: "))
    
    print("Soma: {}\nSubtração: {}\nMultiplicação: {}\nDivisão: {}".format(n1+n2, n1-n2, n1*n2, n1/n2))

ex04()
