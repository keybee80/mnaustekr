# MňauŠtěkr — Principles

## 1. Produktová rozhodnutí mají přednost před implementací

SPEC je autoritativní zdroj produktových požadavků.

Implementace se musí řídit SPEC, nikoli naopak.

Pokud technické řešení vyžaduje produktové rozhodnutí, které SPEC neurčuje, nesmí jej AI ani vývojář svévolně vymyslet. Nejasnost se nejprve předloží k rozhodnutí.

---

## 2. AI nesmí rozšiřovat scope

AI při implementaci nesmí sama přidávat:

- nové funkce,
- nové produktové požadavky,
- nové workflow,
- nové datové významy,
- nové role,
- nové moduly,

pokud nejsou požadované ve SPEC nebo výslovně schválené.

„Bylo by dobré“ není důvod k implementaci.

---

## 3. Jednoduchost je vlastnost produktu

MňauŠtěkr není mobilní Excel.

Každá obrazovka a každý krok musí mít jasný účel.

Před přidáním dalšího pole, tlačítka nebo kroku se musí položit otázka:

> Je to skutečně potřeba pro běžné používání?

Pokud ne, nemá tam být.

---

## 4. Rychlost znamená celkovou námahu

Neoptimalizujeme pouze počet kliknutí.

Počítáme:

- čas,
- počet rozhodnutí,
- počet ručně zadaných údajů,
- hledání,
- přepínání obrazovek,
- nutnost opravovat předvyplněné hodnoty.

Rychlé workflow může mít více kliknutí než jiné workflow, pokud uživateli výrazně sníží celkovou práci.

---

## 5. Mobile-first

Rozhraní musí být navrženo pro malou obrazovku jako primární prostředí.

Desktop není důvodem pro přidávání tabulkových rozhraní nebo dalších ovládacích prvků.

Pokud je něco pohodlné na desktopu, ale špatně použitelné na telefonu, prioritou je mobilní použití.

---

## 6. Předvyplňuj známé údaje

Aplikace má využívat historická data a preference uživatele.

Předvyplnění je žádoucí, pokud:

- je pravděpodobné,
- je pro uživatele užitečné,
- lze jej snadno změnit.

Předvyplnění nesmí být skrytou automatickou změnou dat.

---

## 7. Automatizuj výpočty, ne rozhodnutí uživatele

Pokud lze něco bezpečně vypočítat, aplikace to má vypočítat.

Například rozdělení celkového množství mezi více mazlíčků.

Výsledek je však předvyplněním, nikoli nezměnitelnou pravdou.

Uživatel musí mít možnost výsledek upravit.

---

## 8. Pravdivost dat má přednost před úplností

Je lepší mít neznámou hodnotu než vymyšlenou hodnotu.

Aplikace nesmí:

- doplňovat neznámé datum,
- vytvářet falešnou přesnost,
- zaměňovat odhad za měření,
- zaměňovat podané množství za skutečně snědené množství.

---

## 9. Událost a její zápis jsou dvě různé věci

Datový model musí rozlišovat:

- kdy se událost stala,
- kdy byla zaznamenána,
- kdy byla naposledy změněna.

To je zásadní pro historická data a pozdější statistiky.

---

## 10. Historická data se nesmí ztrácet

Deaktivace entity nesmí odstranit její historii.

Změna aktuálních údajů nesmí bezdůvodně přepsat historický význam záznamu.

Agregované statistiky mají být dohledatelné až ke zdrojovým záznamům.

---

## 11. Detail a agregace musí být propojené

Pokud aplikace zobrazí agregovanou statistiku, uživatel má mít pokud možno možnost rozkliknout její zdrojová data.

Příklad:

> Terry — Carnilove Taštička kuřecí — ⭐ 4,0

musí být možné rozkliknout na konkrétní hodnocení a krmení.

Stejný princip platí opačně pro detail krmiva:

> Carnilove Taštička kuřecí — ⭐ 4,3

→ jednotlivá hodnocení Sherry, Terry, Hildy a Miny.

---

## 12. Data patří mazlíčkům

Aplikace je nástroj pro evidenci jejich života a péče.

Datový model nesmí být navržen pouze podle aktuálního UI.

UI se může měnit.

Význam uložených dat musí zůstat stabilní.

---

## 13. Budoucí modularita nesmí komplikovat současnost

Architektura má umožnit budoucí moduly, ale v0.01 nesmí být kvůli nim zbytečně složitá.

Platí:

> Připravit architekturu na budoucnost neznamená implementovat budoucnost dnes.

---

## 14. Komentáře v kódu vysvětlují záměr

Významné nebo složitější části kódu mají mít stručný komentář vysvětlující:

- proč daná část existuje,
- jaký problém řeší,
- případně proč je řešena právě tímto způsobem.

Komentáře nemají mechanicky popisovat každý řádek kódu.

Cílem je, aby bylo možné po delší době pochopit záměr kódu bez nutnosti znovu rekonstruovat jeho historii.

---

## 15. Čitelnost kódu

Kód má být čitelný a předvídatelný.

Preferujeme:

- malé a srozumitelné funkce,
- jednoznačné názvy,
- jednoduchou logiku,
- jasné datové struktury,
- minimální počet skrytých vedlejších efektů.

Komplexita musí mít konkrétní důvod.

---

## 16. Jedna věc má jedno místo pravdy

Informace nemá být zbytečně duplikována.

Pokud například existuje definice krmiva, její základní údaje mají být uloženy na jednom místě a další části systému na ně mají odkazovat.

Duplikace dat je přípustná pouze tehdy, pokud má jasný technický nebo historický důvod.

---

## 17. Oprava je lepší než workaround

Pokud je datový model nebo workflow špatně navržené, nemá se problém řešit vrstvou dalších výjimek.

Preferujeme opravu základního návrhu.

Postup:

1. identifikovat skutečný problém,
2. opravit model nebo logiku,
3. zkontrolovat dopady,
4. teprve potom pokračovat.

---

## 18. Bezpečnost není pouze UI

Oprávnění nesmí být založena pouze na tom, zda uživatel v UI vidí určité tlačítko.

Každá citlivá operace musí být kontrolována na serverové straně.

Klient je prostředí pro ovládání, nikoli bezpečnostní hranice.

---

## 19. Testování je součást vývoje

Každá významná funkce musí mít odpovídající test.

Testujeme zejména:

- běžný scénář,
- hraniční hodnoty,
- prázdné hodnoty,
- chyby uživatele,
- oprávnění,
- historická data,
- případné konflikty při synchronizaci.

Nová funkce nesmí rozbít existující workflow.

---

## 20. Neřeš předčasně budoucnost

Pokud problém v současném rozsahu neexistuje, není nutné jej řešit složitou architekturou.

Budoucí rozšíření musí být možné, ale jejich konkrétní implementace patří do okamžiku, kdy budou skutečně potřebné.

---

## 21. Před implementací chápat, potom kódovat

AI nástroj má před implementací:

1. prostudovat SPEC,
2. prostudovat PRINCIPLES,
3. pochopit existující architekturu,
4. identifikovat nejasnosti,
5. navrhnout řešení,
6. teprve po schválení implementovat.

Nemá začínat změnami kódu pouze na základě krátkého požadavku bez pochopení kontextu.

---

## 22. Malé změny jsou preferované

Implementace má postupovat po malých, kontrolovatelných krocích.

Po každém významném kroku má být možné:

- spustit aplikaci,
- otestovat změnu,
- zkontrolovat diff,
- vrátit změnu zpět.

Velké neřízené přepisy projektu nejsou preferovaný způsob práce.

---

## 23. Git je součást vývoje

Významná funkční změna má být uzavřena samostatným commitem.

Commit má popisovat jednu logickou změnu.

Před commitem musí být zkontrolováno:

- co se změnilo,
- zda nejsou přidány nechtěné soubory,
- zda fungují testy,
- zda odpovídá změna SPEC.

---

## 24. Produktové rozhodnutí má přednost před „best practice“

Technická best practice není sama o sobě důvodem ke změně produktu.

Pokud technické doporučení odporuje explicitnímu produktovému rozhodnutí, nejprve se musí rozhodnout, zda se produktové rozhodnutí mění.

AI nesmí toto rozhodnutí provést sama.

---

## 25. MňauŠtěkr má pomáhat, ne vyžadovat pozornost

Aplikace má být užitečná i pro uživatele, který ji aktivně nesleduje.

Proto budoucí systém musí umět nejen zobrazovat statistiky, ale také upozornit na významné odchylky.

Zároveň nesmí vytvářet zbytečné množství upozornění.

Cílem je:

> upozornit na něco, co by člověk v běžném životě pravděpodobně přehlédl.

---

## 26. Změny SPEC jsou vědomé produktové změny

Pokud implementace odhalí potřebu změnit SPEC, změna SPEC musí být provedena vědomě.

AI nesmí změnit specifikaci pouze proto, aby její implementace byla jednodušší.

Produkt se nejprve rozhodne.

Technologie se následně přizpůsobí.