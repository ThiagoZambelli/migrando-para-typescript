<img align="right" width="50%" style="margin-top:-20px" src="public/assets/eu.png">

</br>
</br>

<div dsplay="inline-block">
 
 <h1 align="left">Bem-Vindo ao Projeto -> Migrando pro TypeScrip </h1>
 <h2 align="left">Feito por : Thiago Zambelli</h2>
 
  <a href="https://www.linkedin.com/in/thiagozambelli">
    <img width="80px" src="https://i.ibb.co/RyZx12b/linkedin.png" alt="linkedin" style="vertical-align:top;">
  </a>
</div>

&nbsp;

---

&nbsp;

### Aula 1:
- Instalar os pacotes necessários para iniciar a migração de um projeto React de JS para TS;
- Gerar o tsconfig.json a partir do script npx;
- Aplicar as configurações do jsx;
- Diferenciar arquivos js, jsx, ts e tsx.

### Aula 2:
- Configurar o jsx no tsconfig.json;
- Configurar a tipagem de funções;
- Inferir os tipos de variáveis geradas pela desconstrução das props;
- Para que servem pacotes dentro do escopo @types.

### Aula 3:
- Criar interfaces;
- Entender a diferença entre type e Interface;
- Configurar propriedades opcionais nas interfaces;
- Tipar funções;
- Configurar o jsx no tsconfig.json.

&nbsp;

---

&nbsp;

### Diferença entre Interface e Tipo:

&nbsp;

> Ambos funcionam de maneira muito parecida, porem a Interface é aberta, enquanto o Tipo e fechado:

&nbsp;

> - Isso funciona
~~~TypeScript
  interface Cachorro {
    adestrado: boolean;
  }

  interface Cachorro {
    cor: string;
  }
// isso funciona
~~~

&nbsp;
> - Isso não funciona
~~~TypeScript
 type Filhote = {
  cor: string;
};

type Filhote = {
  brinquedos: number;
};
// isso não funciona
~~~