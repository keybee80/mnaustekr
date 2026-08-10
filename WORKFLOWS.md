# MňauŠtěkr — Workflows

## 1. Běžné ranní krmení

### Situace

Je pracovní den ráno. Uživatel před odchodem do práce nakrmí všechny kočky.

### Cíl

Zadat krmení co nejrychleji, bez zbytečného přemýšlení.

### Průběh

1. Uživatel otevře aplikaci.
2. Na domovské obrazovce vidí **+ Nové krmení**.
3. Otevře nové krmení.
4. Automaticky se otevře preferovaný režim **Skupinové krmení**.
5. Kočky jsou předvyplněné podle posledního použití.
6. Krmivo je předvyplněné podle posledního použití.
7. Množství je předvyplněné podle posledního použití.
8. Uživatel případně upraví některou hodnotu.
9. Uloží krmení.
10. Aplikace nabídne možnost **+ Přidat hodnocení** nebo **Odložit**.
11. Uživatel může pokračovat dalším krmením nebo se vrátit na domovskou obrazovku.

### Kritérium

Běžné krmení musí být možné zadat během několika sekund bez nutnosti vyplňovat známé údaje znovu.

---

## 2. Běžné krmení po příchodu z práce

### Situace

Uživatel přijde domů a opět krmí kočky stejným způsobem jako ráno.

### Očekávání

Aplikace zachová poslední použitý stav skupinového workflow.

Uživatel nemusí znovu:

- vybírat všechny kočky,
- hledat krmivo,
- nastavovat běžné množství.

Pokud se něco změnilo, uživatel to jednoduše upraví.

---

## 3. Individuální krmení

### Situace

Jedna kočka dostává jiné krmivo nebo je krmena odděleně.

### Průběh

1. Uživatel otevře **+ Nové krmení**.
2. Přepne na **Krmení mazlíčka**.
3. Vybere konkrétní kočku.
4. Vybere krmivo.
5. Zadá nebo upraví množství.
6. Uloží.

### Důležitá vlastnost

Použití individuálního krmení nesmí změnit poslední stav skupinového krmení.

Při dalším skupinovém krmení musí být stále připravená běžná skupina koček.

---

## 4. Skupinové krmení jednou kapsičkou

### Situace

Uživatel otevře jednu kapsičku a rozdělí ji mezi všechny kočky.

Například:

> kapsička má 85 g

### Průběh

1. Uživatel vybere kočky.
2. Vybere konkrétní kapsičku.
3. Zadá celkovou hmotnost 85 g.
4. Aplikace automaticky předvyplní rozdělení mezi kočky.
5. Uživatel může jednotlivé hodnoty upravit.
6. Uživatel potvrdí krmení.

### Důležitá vlastnost

Uživatel ví, že všechny kočky dostaly a snědly svůj díl.

Proto lze jednotlivé části evidovat jako skutečně snědené.

Automatické rozdělení je pouze výchozí návrh a musí být možné upravit.

---

## 5. Skupinové krmení s rozdílným množstvím

### Situace

Uživatel rozdělí stejné krmivo mezi kočky nerovnoměrně.

Například:

> Sherry — 25 g  
> Terry — 20 g  
> Hilda — 20 g  
> Mina — 20 g

### Průběh

1. Uživatel zadá celkové množství.
2. Aplikace nabídne automatické rozdělení.
3. Uživatel změní jednotlivé hodnoty.
4. Aplikace zobrazí součet.
5. Uživatel může případný rozdíl opravit.
6. Uloží.

---

## 6. Granule

### Situace

Uživatel nasype granule, které jsou kočkám dostupné průběžně.

### Průběh

Uživatel zadá podané množství.

Krmivo je označeno jako suché a má výchozí způsob podání:

> dostupné po celý den

### Důležitá vlastnost

Aplikace nesmí tvrdit, že každá kočka snědla přesně určité množství, pokud to nebylo skutečně změřeno.

U skupiny koček je možné evidovat celkové podané množství.

---

## 7. Individuální suché krmivo

### Situace

Uživatel odměří konkrétní množství granulí jedné kočce.

### Průběh

Uživatel může suché krmivo evidovat jako konkrétní porci.

Výchozí nastavení krmiva jako „dostupné po celý den“ nesmí bránit zadání jednotlivé porce.

---

## 8. Historické krmení z paměti

### Situace

Uživatel aplikaci začne používat a chce zadat zkušenosti z posledních týdnů nebo měsíců.

Pamatuje si například:

> „Tuhle kapsičku Terry milovala.“

Ale neví přesné datum.

### Průběh

Uživatel vytvoří historický záznam.

Může zadat:

- přesné datum,
- pouze měsíc,
- pouze rok,
- přibližné období,
- nebo datum vůbec neuvedený.

### Důležitá vlastnost

Aplikace nesmí použít dnešní datum jen proto, aby byl záznam kompletní.

Neurčitý záznam musí být viditelně odlišitelný od přesného historického záznamu.

---

## 9. Pozdější hodnocení

### Situace

Uživatel ráno zadá krmení, ale nemá čas řešit hodnocení.

### Průběh

Po uložení zvolí:

> **Odložit**

Později aplikace zobrazí:

> **+ Přidat hodnocení**

Uživatel hodnocení doplní.

### Důležitá vlastnost

Hodnocení nesmí být povinné při každém krmení.

---

## 10. Zapomenuté zadání hodnocení

### Situace

Uživatel krmení zadal, ale zapomněl jej ohodnotit.

### Průběh

Aplikace zobrazí připomínku:

> **Máte neohodnocené krmení. + Přidat hodnocení**

Uživatel může připomínku otevřít přímo na konkrétním krmení.

---

## 11. Zapomenuté zadání krmení

### Situace

Uživatel krmení skutečně provedl, ale v pracovním tempu zapomněl záznam zadat.

### Průběh

V obvyklém čase krmení aplikace očekává záznam.

Pokud nebyl zaznamenán, zobrazí připomínku například:

> **Krmení zatím nebylo zaznamenáno.**

Uživatel může následně zadat skutečné krmení.

### Důležitá vlastnost

Aplikace nikdy nesmí tvrdit:

> „Kočka nebyla nakrmena.“

Může pouze tvrdit:

> „Krmení nebylo zaznamenáno.“

---

## 12. Pracovní den vs. víkend

### Pracovní den

Typický režim může být například:

1. ráno před odchodem,
2. po příchodu z práce,
3. večer,
4. pozdě večer / v noci.

### Víkend

Uživatel vstává později.

Časy krmení proto nemusí být stejné jako ve všední den.

Systém musí být schopen pracovat s různými režimy.

Budoucí verze mohou časy automaticky odvozovat z historie.

---

## 13. Přidání nového krmiva během krmení

### Situace

Uživatel zadává krmení a zjistí, že konkrétní krmivo ještě není v seznamu.

### Průběh

1. Uživatel zvolí **+ nové krmivo**.
2. Zadá potřebné údaje.
3. Uloží nové krmivo.
4. Aplikace se vrátí do rozpracovaného krmení.
5. Nové krmivo je automaticky vybrané.

Uživatel nesmí být nucen celý proces začínat znovu.

---

## 14. Přidání nového mazlíčka během krmení

Stejný princip jako u nového krmiva.

Uživatel může během workflow vytvořit nového mazlíčka.

Po uložení se vrátí do rozpracovaného krmení.

---

## 15. Detail mazlíčka

### Situace

Uživatel chce zjistit, jak konkrétní kočka jí.

### Průběh

1. Otevře **Mazlíčci**.
2. Vybere kočku.
3. Zobrazí se detail.

Detail obsahuje:

- základní údaje,
- historii krmení,
- hodnocení,
- statistiky.

Uživatel může například zjistit:

> Terry — Carnilove Taštička kuřecí — ⭐ 4,0

a následně rozkliknout jednotlivá hodnocení.

---

## 16. Detail krmiva

### Situace

Uživatel vybírá, které krmivo koupit.

### Průběh

1. Otevře **Krmiva**.
2. Vybere konkrétní produkt.
3. Vidí celkové hodnocení.
4. Vidí hodnocení jednotlivých koček.
5. Může rozkliknout jednotlivá krmení.

Například:

> Carnilove Taštička kuřecí — ⭐ 4,3

> Sherry — ⭐ 4,7  
> Terry — ⭐ 4,0  
> Hilda — ⭐ 4,5  
> Mina — ⭐ 3,9

Tento workflow je jedním z hlavních důvodů, proč musí být hodnocení uloženo na úrovni konkrétního mazlíčka.

---

## 17. Historie

### Situace

Uživatel chce zjistit, co se v domácnosti dělo.

### Průběh

1. Otevře **Historie**.
2. Zvolí období.
3. Vidí chronologický výpis.
4. Může otevřít konkrétní záznam.

Historie musí rozlišovat:

- přesné záznamy,
- neurčité historické záznamy.

---

## 18. Statistiky podle období

### Situace

Uživatel chce vědět, jak kočky hodnotily krmiva za poslední měsíc.

### Průběh

1. Zvolí období:
   > posledních 30 dní
2. Otevře statistiky.
3. Vidí agregovaná hodnocení.
4. Může rozkliknout zdrojová data.

Například:

> Carnilove Taštička kuřecí — ⭐ 4,3

→ jednotlivá hodnocení v daném období.

---

## 19. Dva typy uživatelů

Aplikace musí počítat minimálně se dvěma základními typy chování.

### Typ A — datový nadšenec

Uživatel:

- aktivně prochází historii,
- rozklikává grafy nebo statistiky,
- sleduje trendy,
- sám hledá odchylky.

Takovému uživateli musí aplikace umožnit dostat se k detailním datům.

### Typ B — uživatel, který data aktivně nesleduje

Uživatel:

- během týdne používá aplikaci rychle,
- nemá čas procházet statistiky,
- nemusí si všimnout postupné změny.

Aplikace mu musí být schopna sama upozornit na významnou odchylku.

Příklad budoucí funkce:

> „Terry za poslední měsíc zvracela 10×.“

Tato funkce není součástí v0.01, ale architektura s ní musí počítat.

---

## 20. Domovská obrazovka

### Typický stav

Uživatel otevře aplikaci.

Vidí například:

> **+ Nové krmení**  
> **+ Nová událost**

> Další krmení za 1 h 20 min

> Máte 2 neohodnocená krmení

> Poslední aktivita

> Zobrazit statistiky

### Přizpůsobení

Uživatel může domovskou obrazovku změnit.

Například:

> Léky  
> Mazlení  
> Krmení  
> Statistiky

Jiný uživatel může mít:

> Krmení  
> Historie  
> Statistiky

Domovská obrazovka není pevně definovaná pro všechny uživatele.

---

## 21. Správa domácnosti

### Situace

Owner chce spravovat domácnost.

### Průběh

Otevře:

> ⚙️ **Spravovat domácnost**

Může podle oprávnění:

- spravovat členy,
- přidat mazlíčka,
- přidat krmivo,
- upravovat nastavení domácnosti,
- spravovat připomínky.

Owner může mazat.

Admin může podle oprávnění deaktivovat.

User nemůže mazat ani deaktivovat.

---

## 22. Návrh na zlepšení

### Situace

Uživatel má nápad nebo najde problém.

### Průběh

V aplikaci vidí:

> **Navrhnout zlepšení**

Vybere kategorii:

- chyba / nefunguje,
- návrh funkce,
- UX / vzhled,
- data / statistiky,
- připomínky,
- technický problém,
- jiný návrh.

Napíše návrh a odešle jej.

Pokud je to možné, aplikace automaticky připojí kontext.

---

## 23. Řízená beta

### Situace

Nový uživatel se chce připojit.

### Průběh

1. Uživatel vytvoří účet.
2. Účet čeká na schválení.
3. SuperOwner uživatele schválí.
4. Uživatel může pokračovat do aplikace.

SuperOwner může problémový účet deaktivovat.

---

## 24. Mazání testovacích dat

### Situace

Během testování vzniknou nesmyslné nebo duplicitní záznamy.

Owner je může smazat.

Admin je může deaktivovat, pokud je to relevantní pro danou entitu.

User nemá možnost mazat nebo deaktivovat chráněná data.

Cílem je zabránit postupnému zaplevelování databáze testovacími záznamy.

---

## 25. Základní UX pravidlo

Uživatel by měl mít pocit:

> „Aplikace ví, co obvykle dělám, a nechá mě to pouze potvrdit nebo změnit.“

Neměl by mít pocit:

> „Musím pokaždé vyplnit formulář.“