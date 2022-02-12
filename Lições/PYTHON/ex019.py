# Um professor quer sortear um dos seus quatro alunos para apagar o quadro. Faça um programa que ajude ele, lendo o nome dos alunos e escrevendo na tela o nome do escolhido.
from random import choice
aluno1 = input("Primeiro Aluno: ")
aluno2 = input("Segundo Aluno: ")
aluno3 = input("Terceiro Aluno: ")
aluno4 = input("Quarto Aluno: ")

lista = [aluno1, aluno2, aluno3, aluno4]
aluno_escolhido = choice(lista)

print("O aluno escolhido foi {}".format(aluno_escolhido))