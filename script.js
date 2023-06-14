let conceito = ""

conceito = prompt('Qual o conceito?')

switch (conceito) {
    case 'a':
        alert('Excelente')
        break;
    case 'b':
        alert('Ótimo')
        break;
    case 'c':
        alert('Bom')
        break;
    case 'd':
        alert('Regular')
        break; 
    case 'e':
        alert('Ruim')
        break; 
    case 'f':
        alert('Nos vemos de novo ano que vem')
        break;      
    default:
        alert('Recarregue a página para outra tentativa')    
}