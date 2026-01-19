// Script para gerar lista completa de nomes de arquivos de imagens
// Cole este código no console do navegador (F12) na página do site

function gerarListaImagensCompleta() {
  const perfumesData = {
    feminino: [
      { nome: "212 VIP ROSE" },
      { nome: "212 VIP ROSE LOVE NY" },
      { nome: "212 VIP" },
      { nome: "212 NYC" },
      { nome: "212 SEXY" },
      { nome: "ACQUA DI GIOIA" },
      { nome: "ALIEN" },
      { nome: "ANGEL ELIXIR" },
      { nome: "ANGEL" },
      { nome: "ANGE OU DEMON" },
      { nome: "ANI NISHANE" },
      { nome: "BABYCAT" },
      { nome: "BACCARAT ROUGE 540" },
      { nome: "BIZANCE ROCHAS" },
      { nome: "CHANEL 5" },
      { nome: "CHANCE EAU TENDRE" },
      { nome: "CH" },
      { nome: "CHEIROSA 62 - SOL DE JANEIRO" },
      { nome: "CHLOE" },
      { nome: "CLASSIQUE" },
      { nome: "COCO MADEMOISELLE" },
      { nome: "COCONUT PASSION VS Body Splash" },
      { nome: "DELINA" },
      { nome: "DELINA EXCLUSIVE" },
      { nome: "DEVOTION" },
      { nome: "DKNY BE DELICIOUS" },
      { nome: "DOLCE GABANNA RED" },
      { nome: "EDEN" },
      { nome: "ERBA PURA" },
      { nome: "ETERNITY" },
      { nome: "EUPHORIA" },
      { nome: "FAME" },
      { nome: "FANTASY" },
      { nome: "FLORA GORGEOUS MAGNÓLIA" },
      { nome: "FLORA GORGEOUS GARDÊNIA" },
      { nome: "GABRIELA SABATINI" },
      { nome: "GODESS" },
      { nome: "GOOD GIRL" },
      { nome: "GOOD GIRL BLUSH" },
      { nome: "GOOD GIRL BLUSH ELIXIR" },
      { nome: "HER CODE" },
      { nome: "HUNDRED SILENT WAYS - NISHANE" },
      { nome: "HYPNOSE" },
      { nome: "HYPNOTIC POISON" },
      { nome: "IDÔLE" },
      { nome: "ISSEY MIYAKE" },
      { nome: "J'ADORE" },
      { nome: "J MALONE ENGLISH PEAR & FREESIA" },
      { nome: "KENZO FLOWER" },
      { nome: "KENZO AMOURE" },
      { nome: "LA BOMBA" },
      { nome: "LA BELLE" },
      { nome: "LA BELLE LE PARFUM 2024" },
      { nome: "LA VIE EST BELLE" },
      { nome: "LA VIE EST BELLE L'EXTRAIT" },
      { nome: "LA VIE EST BELLE ELIXIR" },
      { nome: "LA VIE SOLEIL CRISTAL" },
      { nome: "LADY MILLION" },
      { nome: "LA NUIT TRESOR" },
      { nome: "LIBRE" },
      { nome: "LIGHT BLUES" },
      { nome: "LILI" },
      { nome: "LINTERDIT" },
      { nome: "LINTERDIT EDP ROUGE" },
      { nome: "LOU LOU" },
      { nome: "LOVE IN WHITE 2005" },
      { nome: "LUCKY CHARM" },
      { nome: "MISS DIO" },
      { nome: "MONOI VAGUE D'ETÉ" },
      { nome: "MONCLER POUR FEMME" },
      { nome: "MONTBLANC SIGNATURE PREMIUM" },
      { nome: "MY WAYS" },
      { nome: "NARCISO FOR HER" },
      { nome: "OLYMPEA" },
      { nome: "OMNIA AMETHYSTE" },
      { nome: "PRADA PARADOXE MILANO" },
      { nome: "PRADA PARADOXE INTENSE" },
      { nome: "PURE XS FOR HER" },
      { nome: "PURE MUSC FOR HER" },
      { nome: "QUEEN OF SILK" },
      { nome: "ROLLING IN LOVE" },
      { nome: "ROUGE ROYAL" },
      { nome: "ROYAL AMBER ORIENT" },
      { nome: "SABAH AL WARD LATTAFA" },
      { nome: "SCANDAL" },
      { nome: "SCANDAL LE PARFUM" },
      { nome: "SI" },
      { nome: "THE ONE" },
      { nome: "VALAYA PARFUMS MARLY" },
      { nome: "VANILLE FATALE" },
      { nome: "VERSACE DYLAN TURQUOISE" },
      { nome: "WHITE TEA ELIZABETH ARD" },
      { nome: "YARA LATTAFA" },
      { nome: "YARA ELIXIR - LATTAFA" },
      { nome: "YES I AM" },
    ],
    masculino: [
      { nome: "212 MEN" },
      { nome: "212 HEROES" },
      { nome: "212 SEXYS MEN" },
      { nome: "212 VIP MEN" },
      { nome: "212 VIP BLACK" },
      { nome: "212 VIP BLACK ELIXIR" },
      { nome: "A* MEN" },
      { nome: "ACQUA DI GIO PROFONDO" },
      { nome: "ACQUA DI GIO ABSOLUT" },
      { nome: "ACQUA DIO GIO PARFUM" },
      { nome: "ACQUA DI GIO ELIXIR" },
      { nome: "BAD BOY PREMIUM" },
      { nome: "BAD BOY EXTREME" },
      { nome: "BLEU CHA" },
      { nome: "BOSS BOTTLED" },
      { nome: "BOSS BOTTLED PARFUM" },
      { nome: "CREED AVENTUS" },
      { nome: "CREED IRISH" },
      { nome: "DIOR HOMME INTENSE" },
      { nome: "DIOR HOMME PARFUM 2014" },
      { nome: "EROS VERSACCE" },
      { nome: "INVICTUS" },
      { nome: "INVICTUS PARFUM" },
      { nome: "INVICTUS VICTORY" },
      { nome: "INVICTUS VICTORY ELIXIR" },
      { nome: "ONE MILLION" },
      { nome: "SAUVAGE" },
    ],
  };

  function nomeParaArquivo(nome) {
    return (
      nome
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "") + ".jpg"
    );
  }

  console.log("=== PERFUMES FEMININOS ===\n");
  perfumesData.feminino.forEach((p) => {
    console.log(nomeParaArquivo(p.nome));
  });

  console.log("\n\n=== PERFUMES MASCULINOS ===\n");
  perfumesData.masculino.forEach((p) => {
    console.log(nomeParaArquivo(p.nome));
  });

  // Criar lista em formato de texto
  let lista = "=== LISTA COMPLETA DE IMAGENS NECESSÁRIAS ===\n\n";
  lista += "FEMININOS:\n";
  perfumesData.feminino.forEach((p) => {
    lista += nomeParaArquivo(p.nome) + "\n";
  });
  lista += "\n\nMASCULINOS:\n";
  perfumesData.masculino.forEach((p) => {
    lista += nomeParaArquivo(p.nome) + "\n";
  });

  return lista;
}

// Executar e mostrar resultado
console.log(gerarListaImagensCompleta());

// Também criar um arquivo de texto para download
const lista = gerarListaImagensCompleta();
const blob = new Blob([lista], { type: "text/plain" });
const url = URL.createObjectURL(blob);
const a = document.createElement("a");
a.href = url;
a.download = "lista-imagens-completa.txt";
document.body.appendChild(a);
a.click();
document.body.removeChild(a);
URL.revokeObjectURL(url);

console.log("✅ Arquivo lista-imagens-completa.txt baixado!");
