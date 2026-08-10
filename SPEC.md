# MĹauĹ tÄ›kr v0.01 â€” Specifikace

## 1. CĂ­l

MĹauĹ tÄ›kr je mobile-first aplikace pro rychlou evidenci pĂ©ÄŤe o domĂˇcĂ­ mazlĂ­ÄŤky.

PrimĂˇrnĂ­m cĂ­lem v0.01 je umoĹľnit zadat kaĹľdodennĂ­ krmenĂ­ rychleji a pohodlnÄ›ji neĹľ do Excelu.

Excel je referenÄŤnĂ­ bod nejen z hlediska rychlosti zadĂˇvĂˇnĂ­, ale takĂ© proto, Ĺľe tabulkovĂ© rozhranĂ­ je nevhodnĂ© pro rychlĂ© zadĂˇvĂˇnĂ­ na malĂ© obrazovce.

Aplikace mĂˇ minimalizovat nejen poÄŤet kliknutĂ­, ale celkovou nĂˇmahu uĹľivatele â€” ÄŤas, poÄŤet rozhodnutĂ­ a mnoĹľstvĂ­ ruÄŤnĂ­ho zadĂˇvĂˇnĂ­.

---

## 2. Rozsah v0.01

### SouÄŤĂˇst v0.01

- pĹ™ihlĂˇĹˇenĂ­ uĹľivatele,
- domĂˇcnost,
- ÄŤlenovĂ© domĂˇcnosti,
- mazlĂ­ÄŤci,
- krmiva,
- skupinovĂ© krmenĂ­,
- individuĂˇlnĂ­ krmenĂ­,
- historickĂ© zĂˇznamy krmenĂ­,
- hodnocenĂ­ krmiva,
- zĂˇkladnĂ­ statistiky,
- pĹ™ipomĂ­nky krmenĂ­,
- pĹ™ipomĂ­nky nevyhodnocenĂ©ho krmenĂ­,
- historie,
- filtrovĂˇnĂ­ podle obdobĂ­,
- oprava a mazĂˇnĂ­ zĂˇznamĹŻ podle oprĂˇvnÄ›nĂ­,
- kategorizovanĂ© nĂˇvrhy na zlepĹˇenĂ­ v rĂˇmci bety.

### Mimo rozsah v0.01

- zdravĂ­,
- lĂ©ky,
- toaleta,
- aktivita,
- mazlenĂ­,
- pitnĂ˝ reĹľim,
- nĂˇkupy,
- skladovĂ© hospodĂˇĹ™stvĂ­,
- AI,
- pokroÄŤilĂ© automatickĂ© analĂ˝zy,
- plnĂˇ podpora psĹŻ v UI,
- ĂştulkovĂ˝ reĹľim.

Architektura vĹˇak nesmĂ­ budoucĂ­ rozĹˇĂ­Ĺ™enĂ­ tÄ›chto oblastĂ­ znemoĹľnit.

---

## 3. ZĂˇkladnĂ­ principy

### 3.1 Mobile-first

Aplikace je navrĹľena primĂˇrnÄ› pro pouĹľĂ­vĂˇnĂ­ na telefonu.

RozhranĂ­ musĂ­ bĂ˝t vhodnĂ© pro rychlĂ© pouĹľitĂ­ pĹ™i bÄ›ĹľnĂ© pĂ©ÄŤi o mazlĂ­ÄŤky.

### 3.2 Minimum prĂˇce

Neoptimalizujeme pouze poÄŤet kliknutĂ­.

Minimalizujeme celkovou nĂˇmahu uĹľivatele:

- poÄŤet krokĹŻ,
- poÄŤet rozhodnutĂ­,
- ruÄŤnĂ­ zadĂˇvĂˇnĂ­,
- hledĂˇnĂ­ poloĹľek,
- opakovanĂ© zadĂˇvĂˇnĂ­ znĂˇmĂ˝ch ĂşdajĹŻ.

### 3.3 Automaticky pĹ™edvyplĹuj, ale umoĹľni zmÄ›nu

Aplikace mĂˇ vyuĹľĂ­vat znĂˇmĂˇ data a pĹ™edchozĂ­ pouĹľitĂ­.

NapĹ™Ă­klad:

- poslednĂ­ pouĹľitĂˇ skupina,
- poslednĂ­ pouĹľitĂ© krmivo,
- poslednĂ­ mnoĹľstvĂ­,
- obvyklĂ© hodnoty.

PĹ™edvyplnÄ›nĂ­ vĹˇak nesmĂ­ uĹľivateli znemoĹľnit zadat jinou hodnotu.

### 3.4 Automaticky poÄŤĂ­tej, ale umoĹľni opravu

Pokud lze hodnotu bezpeÄŤnÄ› vypoÄŤĂ­tat, aplikace ji vypoÄŤĂ­tĂˇ.

UĹľivatel vĹˇak musĂ­ mĂ­t moĹľnost vĂ˝sledek upravit.

PĹ™Ă­klad:

> 85 g krmiva pro 4 koÄŤky â†’ automatickĂ© rozdÄ›lenĂ­ 21,25 g na kaĹľdou koÄŤku.

UĹľivatel mĹŻĹľe jednotlivĂˇ mnoĹľstvĂ­ zmÄ›nit.

### 3.5 NevytvĂˇĹ™ej faleĹˇnou pĹ™esnost

Pokud Ăşdaj neznĂˇme, zĹŻstane neznĂˇmĂ˝.

Aplikace nesmĂ­ automaticky vymĂ˝Ĺˇlet datum, ÄŤas, mnoĹľstvĂ­ ani jinĂ© hodnoty jen proto, aby data vypadala ĂşplnÄ›.

### 3.6 ÄŚas udĂˇlosti nenĂ­ ÄŤas zĂˇpisu

MusĂ­me rozliĹˇovat:

- kdy se udĂˇlost skuteÄŤnÄ› stala,
- kdy byla zapsĂˇna do aplikace.

To je dĹŻleĹľitĂ© zejmĂ©na u historickĂ˝ch zĂˇznamĹŻ.

### 3.7 Historie musĂ­ zĹŻstat dohledatelnĂˇ

AgregovanĂ© statistiky musĂ­ bĂ˝t pokud moĹľno dohledatelnĂ© aĹľ ke konkrĂ©tnĂ­m zdrojovĂ˝m zĂˇznamĹŻm.

### 3.8 DomovskĂˇ obrazovka patĹ™Ă­ uĹľivateli

DomovskĂˇ obrazovka je modulĂˇrnĂ­.

UĹľivatel musĂ­ mĂ­t moĹľnost:

- modul zobrazit,
- skrĂ˝t,
- zmÄ›nit jeho poĹ™adĂ­,
- pĹ™ipnout dĹŻleĹľitĂ˝ modul.

VĂ˝chozĂ­ obrazovka v0.01 mĹŻĹľe obsahovat pĹ™edevĹˇĂ­m krmenĂ­, pĹ™ipomĂ­nky, mazlĂ­ÄŤky, poslednĂ­ aktivitu a statistiky.

BudoucĂ­ moduly mohou pĹ™idat napĹ™Ă­klad:

- lĂ©ky,
- zdravĂ­,
- mazlenĂ­,
- venÄŤenĂ­,
- pitnĂ˝ reĹľim,
- toaletu,
- aktivitu.

NovĂ˝ modul nesmĂ­ automaticky pĹ™evzĂ­t kontrolu nad domovskou obrazovkou.

### 3.9 NepĹ™edstĂ­rej mÄ›Ĺ™enĂ­

PozorovĂˇnĂ­ a skuteÄŤnĂ© mÄ›Ĺ™enĂ­ jsou rozdĂ­lnĂ© Ăşdaje.

NapĹ™Ă­klad:

> â€žTerry dnes hodnÄ› pila.â€ś

nenĂ­ totĂ©Ĺľ jako:

> â€žBylo spotĹ™ebovĂˇno 180 ml vody.â€ś

### 3.10 AI nesmĂ­ rozĹˇiĹ™ovat produktovĂ˝ rozsah

AI nĂˇstroj pĹ™i implementaci nesmĂ­ sĂˇm pĹ™idĂˇvat novĂ© produktovĂ© poĹľadavky, funkce nebo mÄ›nit rozhodnutĂ­ specifikace.

Pokud implementace vyĹľaduje rozhodnutĂ­, kterĂ© SPEC neurÄŤuje, musĂ­ bĂ˝t rozhodnutĂ­ nejprve explicitnÄ› potvrzeno.

---
## 4. UĹľivatelĂ© a domĂˇcnost

### 4.1 UĹľivatel

UĹľivatel se pĹ™ihlĂˇsĂ­ do aplikace.

UĹľivatel mĹŻĹľe bĂ˝t ÄŤlenem domĂˇcnosti.

KaĹľdĂ˝ zĂˇznam musĂ­ bĂ˝t moĹľnĂ© spojit s uĹľivatelem, kterĂ˝ jej vytvoĹ™il nebo zmÄ›nil.

### 4.2 DomĂˇcnost

DomĂˇcnost je zĂˇkladnĂ­ prostor pro sdĂ­lenĂ­ dat.

DomĂˇcnost mĹŻĹľe obsahovat:

- vĂ­ce uĹľivatelĹŻ,
- vĂ­ce mazlĂ­ÄŤkĹŻ,
- vĂ­ce krmiv,
- zĂˇznamy krmenĂ­,
- dalĹˇĂ­ budoucĂ­ typy udĂˇlostĂ­.

Data jednotlivĂ˝ch domĂˇcnostĂ­ musĂ­ bĂ˝t navzĂˇjem oddÄ›lena.

### 4.3 Role

V bÄ›ĹľnĂ©m provozu domĂˇcnosti existujĂ­ tĹ™i role:

#### Owner

- plnĂˇ sprĂˇva domĂˇcnosti,
- sprĂˇva ÄŤlenĹŻ,
- mĹŻĹľe mazat data,
- mĹŻĹľe deaktivovat data.

#### Admin

- rozĹˇĂ­Ĺ™enĂˇ sprĂˇva domĂˇcnosti,
- mĹŻĹľe spravovat bÄ›ĹľnĂ˝ obsah,
- mĹŻĹľe deaktivovat mazlĂ­ÄŤky a krmiva,
- nemĹŻĹľe je trvale mazat.

#### User

- mĹŻĹľe aplikaci bÄ›ĹľnÄ› pouĹľĂ­vat,
- mĹŻĹľe zaznamenĂˇvat krmenĂ­,
- mĹŻĹľe zadĂˇvat hodnocenĂ­,
- nemĹŻĹľe mazlĂ­ÄŤky ani krmiva deaktivovat nebo mazat.

OprĂˇvnÄ›nĂ­ musĂ­ bĂ˝t kontrolovĂˇna na serverovĂ© stranÄ›, nikoli pouze skrytĂ­m funkcĂ­ v UI.

### 4.4 SuperOwner

SuperOwner je speciĂˇlnĂ­ role pro poÄŤĂˇteÄŤnĂ­ Ĺ™Ă­zenou betu.

SuperOwner:

- schvaluje novĂ© uĹľivatele,
- mĹŻĹľe spravovat uĹľivatele a domĂˇcnosti,
- mĹŻĹľe uĹľivatele deaktivovat nebo zablokovat,
- mĂˇ pĹ™Ă­stup k beta administraci.

SuperOwner nenĂ­ souÄŤĂˇstĂ­ bÄ›ĹľnĂ© hierarchie oprĂˇvnÄ›nĂ­ domĂˇcnosti.

Je to provoznĂ­ mechanismus poÄŤĂˇteÄŤnĂ­ bety a jeho potĹ™eba bude pozdÄ›ji pĹ™ehodnocena.

---

## 5. MazlĂ­ÄŤek

MazlĂ­ÄŤek je samostatnĂˇ entita patĹ™Ă­cĂ­ do domĂˇcnosti.

### 5.1 ZĂˇkladnĂ­ Ăşdaje

PovinnĂ©:

- oficiĂˇlnĂ­ jmĂ©no,
- krĂˇtkĂ© jmĂ©no / pĹ™ezdĂ­vka,
- druh.

NepovinnĂ©:

- fotografie,
- datum narozenĂ­,
- pohlavĂ­,
- datum pĹ™Ă­chodu do domĂˇcnosti,
- mĂ­sto / skupina,
- poznĂˇmka.

### 5.2 Druh

V UI se pouĹľĂ­vĂˇ pojem **druh**, nikoli â€žtyp mazlĂ­ÄŤkaâ€ś.

V0.01 je primĂˇrnÄ› zamÄ›Ĺ™ena na koÄŤky.

Architektura vĹˇak nesmĂ­ brĂˇnit pozdÄ›jĹˇĂ­ podpoĹ™e dalĹˇĂ­ch druhĹŻ.

PlnĂˇ podpora psĹŻ a dalĹˇĂ­ch druhĹŻ v UI nenĂ­ souÄŤĂˇstĂ­ v0.01.

### 5.3 Datum narozenĂ­ a vÄ›k

VÄ›k se neuklĂˇdĂˇ jako samostatnĂˇ hodnota.

UĹľivatel mĹŻĹľe zadat:

- pĹ™esnĂ© datum,
- mÄ›sĂ­c a rok,
- pouze rok.

VÄ›k se dopoÄŤĂ­tĂˇvĂˇ z dostupnĂ©ho Ăşdaje o narozenĂ­.

Pokud znĂˇme pouze rok, aplikace nesmĂ­ pĹ™edstĂ­rat pĹ™esnĂ˝ vÄ›k.

### 5.4 AktivnĂ­ a neaktivnĂ­ mazlĂ­ÄŤek

MazlĂ­ÄŤek mĹŻĹľe bĂ˝t:

- aktivnĂ­,
- neaktivnĂ­.

NeaktivnĂ­ mazlĂ­ÄŤek se bÄ›ĹľnÄ› nenabĂ­zĂ­ pĹ™i novĂ©m zadĂˇvĂˇnĂ­, ale jeho historickĂˇ data zĹŻstĂˇvajĂ­ zachovĂˇna.

### 5.5 MĂ­sto / skupina

MazlĂ­ÄŤek mĹŻĹľe mĂ­t nepovinnĂ© mĂ­sto nebo organizaÄŤnĂ­ skupinu.

PĹ™Ă­klady:

- Domov,
- GarĂˇĹľ,
- KarantĂ©na,
- jinĂ© mĂ­sto.

MĂ­sto/skupina slouĹľĂ­ pĹ™edevĹˇĂ­m k organizaci a budoucĂ­mu filtrovĂˇnĂ­.

MĂ­sto nesmĂ­ pĹ™idĂˇvat dalĹˇĂ­ krok do bÄ›ĹľnĂ©ho workflow krmenĂ­.

NapĹ™Ă­klad:

- Sherry â€” Domov
- Terry â€” Domov
- GarĂˇĹľovĂˇ koÄŤka â€” GarĂˇĹľ

GarĂˇĹľovĂˇ koÄŤka proto nemusĂ­ bĂ˝t samostatnou domĂˇcnostĂ­.

---

## 6. Krmivo

Krmivo je samostatnĂˇ entita.

### 6.1 Druh krmiva

KaĹľdĂ© krmivo mĂˇ jeden z tÄ›chto druhĹŻ:

- mokrĂ©,
- suchĂ©,
- pamlsek.

Pojem **druh** pouĹľĂ­vĂˇme pro tuto klasifikaci v UI i specifikaci.

### 6.2 Identifikace krmiva

Krmivo mĂˇ minimĂˇlnÄ›:

- znaÄŤku,
- nĂˇzev produktu.

DĂˇle mĹŻĹľe mĂ­t:

- variantu,
- pĹ™Ă­chuĹĄ,
- fotografii,
- poznĂˇmku,
- cenu.

Receptury ani jejich verzovĂˇnĂ­ se v0.01 neĹ™eĹˇĂ­.

Pokud uĹľivatel povaĹľuje zmÄ›nÄ›nĂ˝ produkt za novĂ˝ produkt, vytvoĹ™Ă­ novou poloĹľku krmiva.

### 6.3 VĂ˝chozĂ­ zpĹŻsob podĂˇnĂ­

Krmivo mĂˇ vĂ˝chozĂ­ zpĹŻsob podĂˇnĂ­.

| Druh | VĂ˝chozĂ­ zpĹŻsob |
|---|---|
| mokrĂ© | jednorĂˇzovĂ© |
| suchĂ© | dostupnĂ© po celĂ˝ den |
| pamlsek | jednorĂˇzovĂ© |

VĂ˝chozĂ­ zpĹŻsob podĂˇnĂ­ nenĂ­ nemÄ›nnĂ© pravidlo.

UĹľivatel jej mĹŻĹľe pĹ™i konkrĂ©tnĂ­m krmenĂ­ zmÄ›nit.

### 6.4 Pamlsky

Pamlsek je samostatnĂ˝ druh krmiva.

MĹŻĹľe jĂ­t napĹ™Ă­klad o:

- Dreamies,
- masovĂ˝ pamlsek,
- pastu,
- polĂ©vku,
- jinou doplĹkovou potravu.

Pamlsek se ve vĂ˝chozĂ­m nastavenĂ­ eviduje jako jednorĂˇzovĂ© podĂˇnĂ­.

### 6.5 Cena

Cena je nepovinnĂ˝ Ăşdaj.

Cena nenĂ­ souÄŤĂˇstĂ­ bÄ›ĹľnĂ©ho workflow zadĂˇvĂˇnĂ­ krmenĂ­.

HistorickĂˇ cena nesmĂ­ bĂ˝t pĹ™epsĂˇna zmÄ›nou aktuĂˇlnĂ­ ceny, pokud bude cena v budoucnu vyuĹľita pro statistiky nebo nĂˇkupnĂ­ funkce.

### 6.6 AktivnĂ­ a neaktivnĂ­ krmivo

Krmivo mĹŻĹľe bĂ˝t:

- aktivnĂ­,
- neaktivnĂ­.

NeaktivnĂ­ krmivo se bÄ›ĹľnÄ› nenabĂ­zĂ­ pĹ™i novĂ©m krmenĂ­, ale jeho historickĂ© zĂˇznamy zĹŻstĂˇvajĂ­ zachovĂˇny.

### 6.7 PĹ™idĂˇnĂ­ krmiva bÄ›hem zadĂˇvĂˇnĂ­

NovĂ© krmivo musĂ­ bĂ˝t moĹľnĂ© vytvoĹ™it pĹ™Ă­mo z workflow novĂ©ho krmenĂ­.

UĹľivatel nemusĂ­ opouĹˇtÄ›t rozpracovanĂ© krmenĂ­.

Po vytvoĹ™enĂ­ novĂ©ho krmiva se aplikace vrĂˇtĂ­ do pĹŻvodnĂ­ho workflow a novÄ› vytvoĹ™enĂ© krmivo bude pĹ™ipraveno k pouĹľitĂ­.

StejnĂ˝ princip platĂ­ pro pĹ™idĂˇnĂ­ novĂ©ho mazlĂ­ÄŤka.
## 7. KrmenĂ­

KrmenĂ­ je hlavnĂ­ datovĂ˝ zĂˇznam v0.01.

KrmenĂ­ zaznamenĂˇvĂˇ skuteÄŤnou udĂˇlost, pĹ™i kterĂ© bylo konkrĂ©tnĂ­mu mazlĂ­ÄŤkovi nebo skupinÄ› mazlĂ­ÄŤkĹŻ podĂˇno konkrĂ©tnĂ­ krmivo.

### 7.1 ZĂˇkladnĂ­ Ăşdaje krmenĂ­

ZĂˇznam krmenĂ­ obsahuje minimĂˇlnÄ›:

- mazlĂ­ÄŤka nebo mazlĂ­ÄŤky,
- krmivo,
- mnoĹľstvĂ­,
- zpĹŻsob podĂˇnĂ­,
- ÄŤas udĂˇlosti nebo informaci, Ĺľe ÄŤas nenĂ­ znĂˇm,
- ÄŤas vytvoĹ™enĂ­ zĂˇznamu,
- uĹľivatele, kterĂ˝ zĂˇznam vytvoĹ™il.

VolitelnÄ› mĹŻĹľe obsahovat poznĂˇmku.

### 7.2 SkupinovĂ© krmenĂ­

SkupinovĂ© krmenĂ­ je urÄŤeno pro situaci, kdy dostĂˇvĂˇ stejnĂ© krmivo vĂ­ce mazlĂ­ÄŤkĹŻ.

UĹľivatel:

1. otevĹ™e **NovĂ© krmenĂ­**,
2. zvolĂ­ zĂˇloĹľku **SkupinovĂ© krmenĂ­**,
3. vybere mazlĂ­ÄŤky,
4. vybere krmivo,
5. zadĂˇ mnoĹľstvĂ­,
6. uloĹľĂ­ zĂˇznam.

MazlĂ­ÄŤky lze vybĂ­rat zaĹˇkrtĂˇvĂˇnĂ­m.

PĹ™Ă­klad:

- â‘ Sherry
- â‘ Terry
- â‘ Hilda
- â‘ Mina
- â GarĂˇĹľovĂˇ koÄŤka

SkupinovĂ© krmenĂ­ slouĹľĂ­ pouze jako rychlĂ˝ zpĹŻsob zadĂˇnĂ­ vĂ­ce individuĂˇlnĂ­ch vztahĹŻ mezi mazlĂ­ÄŤkem a krmivem.

KaĹľdĂ˝ mazlĂ­ÄŤek musĂ­ mĂ­t v uloĹľenĂ˝ch datech vlastnĂ­ mnoĹľstvĂ­ a pĹ™Ă­padnÄ› vlastnĂ­ hodnocenĂ­.

### 7.3 IndividuĂˇlnĂ­ krmenĂ­

IndividuĂˇlnĂ­ krmenĂ­ je urÄŤeno pro jednoho konkrĂ©tnĂ­ho mazlĂ­ÄŤka.

UĹľivatel:

1. otevĹ™e **NovĂ© krmenĂ­**,
2. zvolĂ­ zĂˇloĹľku **KrmenĂ­ mazlĂ­ÄŤka**,
3. vybere mazlĂ­ÄŤka,
4. vybere krmivo,
5. zadĂˇ mnoĹľstvĂ­,
6. uloĹľĂ­ zĂˇznam.

TypickĂ˝m pĹ™Ă­kladem je samostatnĂ© krmenĂ­ koÄŤky v garĂˇĹľi.

### 7.4 OddÄ›lenĂ˝ stav skupinovĂ©ho a individuĂˇlnĂ­ho workflow

Aplikace si pamatuje poslednĂ­ pouĹľitĂ© hodnoty oddÄ›lenÄ› pro oba reĹľimy.

NapĹ™Ă­klad:

**SkupinovĂ© krmenĂ­**
- poslednĂ­ vybranĂ­ mazlĂ­ÄŤci: Sherry, Terry, Hilda, Mina,
- poslednĂ­ krmivo,
- poslednĂ­ mnoĹľstvĂ­.

**KrmenĂ­ mazlĂ­ÄŤka**
- poslednĂ­ vybranĂ˝ mazlĂ­ÄŤek: GarĂˇĹľovĂˇ koÄŤka,
- poslednĂ­ krmivo,
- poslednĂ­ mnoĹľstvĂ­.

PouĹľitĂ­ individuĂˇlnĂ­ho krmenĂ­ nesmĂ­ zmÄ›nit pĹ™edvybranou skupinu pro nĂˇsledujĂ­cĂ­ skupinovĂ© krmenĂ­.

To je dĹŻleĹľitĂ© zejmĂ©na pro mazlĂ­ÄŤky krmenĂ© oddÄ›lenÄ›, napĹ™Ă­klad v garĂˇĹľi.

### 7.5 PreferovanĂ˝ reĹľim

Aplikace si mĹŻĹľe pamatovat preferovanĂ˝ reĹľim domĂˇcnosti nebo uĹľivatele.

Pokud uĹľivatel bÄ›ĹľnÄ› pouĹľĂ­vĂˇ skupinovĂ© krmenĂ­, otevĹ™e se po stisknutĂ­ **+ NovĂ© krmenĂ­** skupinovĂ© krmenĂ­.

PĹ™epnutĂ­ na individuĂˇlnĂ­ krmenĂ­ nesmĂ­ automaticky zmÄ›nit tuto preferenci.

### 7.6 JednomazlĂ­ÄŤkovĂˇ domĂˇcnost

Pokud mĂˇ domĂˇcnost pouze jednoho aktivnĂ­ho mazlĂ­ÄŤka, jeho vĂ˝bÄ›r nemĂˇ bĂ˝t zbyteÄŤnĂ˝m krokem.

Aplikace mĹŻĹľe mazlĂ­ÄŤka automaticky pĹ™edvyplnit.

### 7.7 MnoĹľstvĂ­

MnoĹľstvĂ­ musĂ­ bĂ˝t moĹľnĂ© zadat jednoduĹˇe a pĹ™irozenÄ› pro danĂ˝ druh krmiva.

PodporovanĂ© zpĹŻsoby mohou zahrnovat:

- gramy,
- poÄŤet kusĹŻ,
- podĂ­l balenĂ­,
- jinou vhodnou jednotku.

PĹ™esnĂ˝ rozsah jednotek musĂ­ bĂ˝t navrĹľen tak, aby nezvyĹˇoval sloĹľitost bÄ›ĹľnĂ©ho workflow.

### 7.8 CelkovĂ© mnoĹľstvĂ­ pĹ™i skupinovĂ©m krmenĂ­

PĹ™i skupinovĂ©m krmenĂ­ mĹŻĹľe uĹľivatel zadat mnoĹľstvĂ­ pro celou skupinu.

NapĹ™Ă­klad:

> 85 g mokrĂ©ho krmiva celkem.

Aplikace automaticky rozpoÄŤĂ­tĂˇ mnoĹľstvĂ­ mezi vybranĂ© mazlĂ­ÄŤky.

NapĹ™Ă­klad pĹ™i ÄŤtyĹ™ech mazlĂ­ÄŤcĂ­ch:

> Sherry â€” 21,25 g
> Terry â€” 21,25 g
> Hilda â€” 21,25 g
> Mina â€” 21,25 g

JednotlivĂ© hodnoty musĂ­ bĂ˝t moĹľnĂ© ruÄŤnÄ› upravit.
Automaticky vypoÄŤtenĂ© rozdÄ›lenĂ­ je pouze pĹ™edvyplnÄ›nĂˇ hodnota. NeznamenĂˇ automaticky, Ĺľe kaĹľdĂ˝ mazlĂ­ÄŤek skuteÄŤnÄ› snÄ›dl pĹ™esnÄ› toto mnoĹľstvĂ­. UĹľivatel mĹŻĹľe jednotlivĂˇ mnoĹľstvĂ­ upravit podle skuteÄŤnosti.

NapĹ™Ă­klad:

> Sherry â€” 25 g
> Terry â€” 20 g
> Hilda â€” 20 g
> Mina â€” 20 g

Aplikace musĂ­ zobrazit pĹ™Ă­padnĂ˝ rozdĂ­l mezi celkovĂ˝m zadanĂ˝m mnoĹľstvĂ­m a souÄŤtem individuĂˇlnĂ­ch mnoĹľstvĂ­.

### 7.9 MokrĂ© krmivo

MokrĂ© krmivo je ve vĂ˝chozĂ­m nastavenĂ­ jednorĂˇzovĂ©.

Pokud uĹľivatel rozdÄ›lĂ­ jedno balenĂ­ mezi konkrĂ©tnĂ­ mazlĂ­ÄŤky a potvrdĂ­, Ĺľe jednotlivĂ© ÄŤĂˇsti byly snÄ›deny, eviduje se pĹ™Ă­sluĹˇnĂ© mnoĹľstvĂ­ jako skuteÄŤnÄ› snÄ›denĂ©.

Aplikace nesmĂ­ automaticky pĹ™edpoklĂˇdat skuteÄŤnou spotĹ™ebu tam, kde ji uĹľivatel nepotvrdil.

### 7.10 SuchĂ© krmivo

SuchĂ© krmivo je ve vĂ˝chozĂ­m nastavenĂ­ dostupnĂ© po celĂ˝ den.

UĹľivatel vĹˇak mĹŻĹľe suchĂ© krmivo evidovat i jako jednotlivou odmÄ›Ĺ™enou porci.

U suchĂ©ho krmiva se standardnÄ› eviduje pĹ™edevĹˇĂ­m podanĂ© mnoĹľstvĂ­.

PodanĂ© mnoĹľstvĂ­ nesmĂ­ bĂ˝t automaticky interpretovĂˇno jako skuteÄŤnÄ› zkonzumovanĂ© mnoĹľstvĂ­.

### 7.11 Pamlsky

Pamlsky jsou ve vĂ˝chozĂ­m nastavenĂ­ jednorĂˇzovĂ©.

Mohou bĂ˝t evidovĂˇny napĹ™Ă­klad jako:

- poÄŤet kusĹŻ,
- mnoĹľstvĂ­,
- jinĂˇ vhodnĂˇ jednotka.

### 7.12 ZpĹŻsob podĂˇnĂ­

KonkrĂ©tnĂ­ zĂˇznam krmenĂ­ obsahuje skuteÄŤnĂ˝ zpĹŻsob podĂˇnĂ­.

VĂ˝chozĂ­ hodnota se mĹŻĹľe pĹ™evzĂ­t z nastavenĂ­ krmiva, ale uĹľivatel ji mĹŻĹľe pĹ™i konkrĂ©tnĂ­m krmenĂ­ zmÄ›nit.

### 7.13 HistorickĂ© krmenĂ­

UĹľivatel mĹŻĹľe pĹ™i zahĂˇjenĂ­ pouĹľĂ­vĂˇnĂ­ aplikace zadat starĹˇĂ­ zkuĹˇenosti s krmivy podle pamÄ›ti.

TakovĂ˝ zĂˇznam mĹŻĹľe mĂ­t:

- pĹ™esnĂ© datum a ÄŤas,
- pouze datum,
- pĹ™ibliĹľnĂ© obdobĂ­,
- ĹľĂˇdnĂ© datum.

Pokud uĹľivatel datum neznĂˇ, aplikace nesmĂ­ datum automaticky doplnit aktuĂˇlnĂ­m datem.

NeurÄŤitĂ˝ historickĂ˝ zĂˇznam musĂ­ bĂ˝t v datech jednoznaÄŤnÄ› odliĹˇitelnĂ˝ od pĹ™esnĂ©ho krmenĂ­.

NeurÄŤitĂ© historickĂ© zĂˇznamy nesmĂ­ bĂ˝t automaticky zapoÄŤĂ­tĂˇvĂˇny do ÄŤasovÄ› omezenĂ˝ch statistik, pokud nenĂ­ moĹľnĂ© urÄŤit, Ĺľe do danĂ©ho obdobĂ­ skuteÄŤnÄ› patĹ™Ă­.

### 7.14 ÄŚas udĂˇlosti a ÄŤas zĂˇpisu

KaĹľdĂ˝ pĹ™esnĂ˝ zĂˇznam musĂ­ rozliĹˇovat:

- ÄŤas, kdy se krmenĂ­ stalo,
- ÄŤas, kdy byl zĂˇznam vytvoĹ™en,
- pĹ™Ă­padnÄ› ÄŤas poslednĂ­ zmÄ›ny.

PozdÄ›jĹˇĂ­ zadĂˇnĂ­ historickĂ©ho krmenĂ­ proto nesmĂ­ zmÄ›nit jeho skuteÄŤnĂ˝ ÄŤas udĂˇlosti.

### 7.15 RychlĂ© opakovanĂ© zadĂˇvĂˇnĂ­

Po uloĹľenĂ­ krmenĂ­ mĂˇ uĹľivatel moĹľnost:

- pĹ™idat hodnocenĂ­,
- zadat dalĹˇĂ­ krmenĂ­,
- dokonÄŤit workflow a vrĂˇtit se na domovskou obrazovku.

Po uloĹľenĂ­ nenĂ­ nutnĂ© vracet uĹľivatele na zaÄŤĂˇtek aplikace.

### 7.16 PĹ™idĂˇnĂ­ poloĹľky bÄ›hem krmenĂ­

Pokud pĹ™i zadĂˇvĂˇnĂ­ krmenĂ­ chybĂ­ mazlĂ­ÄŤek nebo krmivo, musĂ­ bĂ˝t moĹľnĂ© jej vytvoĹ™it bez opuĹˇtÄ›nĂ­ rozpracovanĂ©ho workflow.

Po vytvoĹ™enĂ­ se uĹľivatel vrĂˇtĂ­ zpÄ›t k rozpracovanĂ©mu krmenĂ­.

### 7.17 Oprava krmenĂ­

KrmenĂ­ lze podle oprĂˇvnÄ›nĂ­ upravit.

UĹľivatel nesmĂ­ bĂ˝t nucen mazat celĂ© krmenĂ­ jen proto, aby opravil jednu jeho ÄŤĂˇst.

U skupinovĂ©ho krmenĂ­ lze napĹ™Ă­klad:

- pĹ™idat mazlĂ­ÄŤka,
- odebrat mazlĂ­ÄŤka,
- upravit mnoĹľstvĂ­ konkrĂ©tnĂ­ho mazlĂ­ÄŤka,
- zmÄ›nit krmivo,
- zmÄ›nit zpĹŻsob podĂˇnĂ­.

Oprava existujĂ­cĂ­ho zĂˇznamu nesmĂ­ vytvoĹ™it novĂ˝ duplicitnĂ­ zĂˇznam.

### 7.18 SmazĂˇnĂ­ krmenĂ­

UĹľivatel s odpovĂ­dajĂ­cĂ­m oprĂˇvnÄ›nĂ­m mĹŻĹľe krmenĂ­ smazat.

PĹ™ed smazĂˇnĂ­m musĂ­ aplikace vyĹľĂˇdat potvrzenĂ­.

SmazĂˇnĂ­ musĂ­ bĂ˝t skuteÄŤnÄ› rozliĹˇitelnĂ© od pouhĂ© deaktivace, protoĹľe chybnĂ© nebo testovacĂ­ zĂˇznamy musĂ­ bĂ˝t moĹľnĂ© odstranit.

---

## 8. HodnocenĂ­ krmiva

HodnocenĂ­ vyjadĹ™uje, jak konkrĂ©tnĂ­mu mazlĂ­ÄŤkovi konkrĂ©tnĂ­ krmivo chutnalo.

HodnocenĂ­ patĹ™Ă­ ke konkrĂ©tnĂ­mu krmenĂ­ konkrĂ©tnĂ­ho mazlĂ­ÄŤka.

### 8.1 HodnocenĂ­

HodnocenĂ­ je na ĹˇkĂˇle:

**0â€“5 hvÄ›zdiÄŤek.**

HodnocenĂ­ mĹŻĹľe bĂ˝t:

- zadĂˇno okamĹľitÄ› po krmenĂ­,
- zadĂˇno pozdÄ›ji,
- zmÄ›nÄ›no,
- ponechĂˇno doÄŤasnÄ› nevyplnÄ›nĂ©.

### 8.2 SkupinovĂ© krmenĂ­ a hodnocenĂ­

Jedno skupinovĂ© krmenĂ­ mĹŻĹľe mĂ­t rozdĂ­lnĂˇ hodnocenĂ­ jednotlivĂ˝ch mazlĂ­ÄŤkĹŻ.

NapĹ™Ă­klad:

> Sherry â­â­â­â­â­
> Terry â­â­â­â­
> Hilda â­â­â­â­â­
> Mina â­â­â­

To je dĹŻleĹľitĂ© pro statistiky podle mazlĂ­ÄŤka i podle krmiva.

### 8.3 OdloĹľenĂ© hodnocenĂ­

Po uloĹľenĂ­ krmenĂ­ mĹŻĹľe uĹľivatel zvolit:

**PĹ™idat hodnocenĂ­**

nebo

**OdloĹľit**

OdloĹľenĂ© hodnocenĂ­ se stĂˇvĂˇ ÄŤekajĂ­cĂ­ Ăşlohou a mĹŻĹľe vyvolat pozdÄ›jĹˇĂ­ pĹ™ipomĂ­nku.

UĹľivatel nesmĂ­ bĂ˝t nucen hodnotit krmivo pĹ™i kaĹľdĂ©m zadĂˇnĂ­ krmenĂ­.
## 9. Historie

Historie je chronologickĂ˝ textovĂ˝ pĹ™ehled zaznamenanĂ˝ch krmenĂ­ a dalĹˇĂ­ch udĂˇlostĂ­, kterĂ© budou v budoucnu pĹ™idĂˇny.

V0.01 nemusĂ­ historie obsahovat grafy.

### 9.1 PĹ™esnĂ© a neurÄŤitĂ© zĂˇznamy

Historie musĂ­ rozliĹˇovat:

- pĹ™esnĂ© krmenĂ­,
- historickĂ© krmenĂ­ bez pĹ™esnĂ©ho data nebo ÄŤasu.

NeurÄŤitĂ© historickĂ© zĂˇznamy nesmĂ­ bĂ˝t prezentovĂˇny jako pĹ™esnĂ© ÄŤasovĂ© Ăşdaje.

UĹľivatel musĂ­ bĂ˝t schopen tyto dvÄ› skupiny pĹ™i prochĂˇzenĂ­ historie rozliĹˇit.

### 9.2 ObdobĂ­

Historii lze filtrovat podle obdobĂ­.

MinimĂˇlnÄ›:

- dnes,
- poslednĂ­ch 7 dnĂ­,
- poslednĂ­ch 30 dnĂ­,
- vlastnĂ­ obdobĂ­.

ZvolenĂ˝ filtr obdobĂ­ se pouĹľĂ­vĂˇ takĂ© pro relevantnĂ­ agregovanĂ© statistiky.

NapĹ™Ă­klad:

> PoslednĂ­ch 30 dnĂ­

znamenĂˇ, Ĺľe historie i statistiky zobrazujĂ­ data za poslednĂ­ch 30 dnĂ­.

### 9.3 Detail zĂˇznamu

KaĹľdĂ˝ zĂˇznam historie lze rozkliknout.

Detail zobrazĂ­ dostupnĂ© Ăşdaje o:

- ÄŤase,
- mazlĂ­ÄŤkovi,
- krmivu,
- mnoĹľstvĂ­,
- zpĹŻsobu podĂˇnĂ­,
- hodnocenĂ­,
- autorovi,
- pĹ™Ă­padnĂ© poznĂˇmce.

---

## 10. Statistiky

V0.01 obsahuje zĂˇkladnĂ­ agregovanĂ© statistiky bez nutnosti grafĹŻ.

### 10.1 Statistiky podle mazlĂ­ÄŤka

U detailu mazlĂ­ÄŤka lze zobrazit:

- pouĹľĂ­vanĂˇ krmiva,
- poÄŤet krmenĂ­,
- poÄŤet hodnocenĂ­,
- prĹŻmÄ›rnĂ© hodnocenĂ­,
- hodnocenĂ­ jednotlivĂ˝ch krmiv.

KaĹľdĂ© agregovanĂ© ÄŤĂ­slo musĂ­ bĂ˝t moĹľnĂ© rozkliknout aĹľ na zdrojovĂ© zĂˇznamy.

PĹ™Ă­klad:

> Terry
> Carnilove TaĹˇtiÄŤka kuĹ™ecĂ­ â€” â­ 4,0
> 12 hodnocenĂ­

Po rozkliknutĂ­ jsou dostupnĂˇ jednotlivĂˇ krmenĂ­ a hodnocenĂ­.

### 10.2 Statistiky podle krmiva

U detailu krmiva lze zobrazit:

- poÄŤet pouĹľitĂ­,
- poÄŤet hodnocenĂ­,
- celkovĂ© prĹŻmÄ›rnĂ© hodnocenĂ­,
- prĹŻmÄ›rnĂ© hodnocenĂ­ podle jednotlivĂ˝ch mazlĂ­ÄŤkĹŻ.

PĹ™Ă­klad:

> Carnilove TaĹˇtiÄŤka kuĹ™ecĂ­ â€” â­ 4,3

a dĂˇle:

> Sherry â€” â­ 4,7
> Terry â€” â­ 4,0
> Hilda â€” â­ 4,5
> Mina â€” â­ 3,9

Tento pohled je dĹŻleĹľitĂ˝ takĂ© pro rozhodovĂˇnĂ­ pĹ™i nĂˇkupu krmiva.

### 10.3 Statistiky respektujĂ­ obdobĂ­

Agregace musĂ­ vĹľdy respektovat zvolenĂ© obdobĂ­, pokud je obdobĂ­ pouĹľito.

NapĹ™Ă­klad:

> Carnilove â€” â­ 4,7 za poslednĂ­ch 30 dnĂ­

nemusĂ­ bĂ˝t stejnĂ© jako:

> Carnilove â€” â­ 4,1 za celou historii.

Aplikace musĂ­ bĂ˝t schopna oba Ăşdaje odliĹˇit.

### 10.4 ZĂˇkladnĂ­ statistickĂ© otĂˇzky

V0.01 mĂˇ umoĹľnit odpovÄ›dÄ›t alespoĹ na:

- co se v domĂˇcnosti nejÄŤastÄ›ji podĂˇvĂˇ,
- kterĂˇ krmiva majĂ­ nejlepĹˇĂ­ hodnocenĂ­,
- kterĂˇ krmiva majĂ­ nĂ­zkĂ© hodnocenĂ­,
- jak konkrĂ©tnĂ­ mazlĂ­ÄŤci hodnotĂ­ konkrĂ©tnĂ­ krmiva.

PokroÄŤilĂ© trendy, automatickĂ© interpretace a AI analĂ˝za nejsou souÄŤĂˇstĂ­ v0.01.

---

## 11. PĹ™ipomĂ­nky

V0.01 podporuje pĹ™ipomĂ­nky souvisejĂ­cĂ­ s krmenĂ­m.

### 11.1 PĹ™ipomĂ­nka oÄŤekĂˇvanĂ©ho krmenĂ­

Aplikace mĹŻĹľe upozornit, Ĺľe se blĂ­ĹľĂ­ obvyklĂ˝ ÄŤas krmenĂ­.

UĹľivatel mĹŻĹľe nĂˇslednÄ› krmenĂ­ zaznamenat.

### 11.2 PĹ™ipomĂ­nka nezadanĂ©ho krmenĂ­

Pokud v oÄŤekĂˇvanĂ©m obdobĂ­ nenĂ­ zaznamenĂˇno krmenĂ­, aplikace mĹŻĹľe upozornit, Ĺľe krmenĂ­ zatĂ­m nebylo zadĂˇno.

To je dĹŻleĹľitĂ© i proto, Ĺľe uĹľivatel mĹŻĹľe krmenĂ­ skuteÄŤnÄ› provĂ©st, ale pĹ™i pracovnĂ­m tempu zapomenout zĂˇznam zadat.

PĹ™ipomĂ­nka proto nesmĂ­ tvrdit:

> â€žKoÄŤka nebyla nakrmena.â€ś

SprĂˇvnĂˇ formulace je napĹ™Ă­klad:

> â€žKrmenĂ­ zatĂ­m nebylo zaznamenĂˇno.â€ś

### 11.3 PĹ™ipomĂ­nka hodnocenĂ­

Pokud bylo krmenĂ­ uloĹľeno bez hodnocenĂ­ a uĹľivatel jej odloĹľil, aplikace mĹŻĹľe pozdÄ›ji zobrazit:

> **+ PĹ™idat hodnocenĂ­**

### 11.4 PĹ™Ă­jemci pĹ™ipomĂ­nek

Ve vĂ˝chozĂ­m nastavenĂ­ se pĹ™ipomĂ­nky zobrazujĂ­ relevantnĂ­m uĹľivatelĹŻm domĂˇcnosti.

PozdÄ›ji mĹŻĹľe bĂ˝t moĹľnĂ© nastavit konkrĂ©tnĂ­ pĹ™Ă­jemce.

Tato moĹľnost nenĂ­ nutnĂˇ pro prvnĂ­ implementaci, pokud by vĂ˝raznÄ› komplikovala vĂ˝voj.

### 11.5 PamÄ›ĹĄ bÄ›ĹľnĂ©ho reĹľimu

DomĂˇcnost mĹŻĹľe mĂ­t bÄ›ĹľnĂ˝ reĹľim krmenĂ­ napĹ™Ă­klad:

- rĂˇno pĹ™ed odchodem do prĂˇce,
- po pĹ™Ă­chodu,
- veÄŤer,
- pozdÄ› veÄŤer / v noci.

O vĂ­kendu mohou bĂ˝t ÄŤasy posunutĂ©.

V0.01 mĹŻĹľe pouĹľĂ­vat jednoduchĂ© nastavenĂ­ nebo zĂˇkladnĂ­ plĂˇn pĹ™ipomĂ­nek.

BudoucĂ­ verze mohou bÄ›ĹľnĂ© ÄŤasy automaticky odvozovat z historickĂ˝ch dat.

---

## 12. DomovskĂˇ obrazovka

DomovskĂˇ obrazovka je hlavnĂ­ pracovnĂ­ prostor uĹľivatele.

### 12.1 VĂ˝chozĂ­ moduly v0.01

VĂ˝chozĂ­ konfigurace mĹŻĹľe obsahovat:

- **+ NovĂ© krmenĂ­**
- **+ NovĂˇ udĂˇlost**
- pĹ™ipomĂ­nky,
- dalĹˇĂ­ krmenĂ­,
- poslednĂ­ aktivitu,
- mazlĂ­ÄŤky,
- statistiky,
- historii.

### 12.2 VelkĂˇ akÄŤnĂ­ tlaÄŤĂ­tka

Akce pouĹľĂ­vanĂ© ÄŤasto musĂ­ bĂ˝t vizuĂˇlnÄ› vĂ˝raznĂ©.

MinimĂˇlnÄ›:

> **+ NovĂ© krmenĂ­**

> **+ NovĂˇ udĂˇlost**

â€žNovĂˇ udĂˇlostâ€ś mĹŻĹľe bĂ˝t v0.01 pĹ™ipravena pro budoucĂ­ modulĂˇrnĂ­ systĂ©m udĂˇlostĂ­, i kdyĹľ konkrĂ©tnĂ­ typy udĂˇlostĂ­ mimo krmenĂ­ nejsou v0.01 implementovĂˇny.

### 12.3 Modularita

DomovskĂˇ obrazovka nesmĂ­ bĂ˝t pevnÄ› svĂˇzanĂˇ pouze s krmenĂ­m.

UĹľivatel musĂ­ mĂ­t moĹľnost:

- modul zobrazit,
- skrĂ˝t,
- zmÄ›nit jeho poĹ™adĂ­,
- pĹ™ipnout dĹŻleĹľitĂ˝ modul.

BudoucĂ­ moduly mohou obsahovat napĹ™Ă­klad:

- lĂ©ky,
- zdravĂ­,
- mazlenĂ­,
- venÄŤenĂ­,
- pitnĂ˝ reĹľim,
- toaletu,
- aktivitu.

UĹľivatel mĹŻĹľe mĂ­t napĹ™Ă­klad zĂˇjem pĹ™edevĹˇĂ­m o lĂ©ky nebo mazlenĂ­ a nemusĂ­ chtĂ­t mĂ­t krmenĂ­ na domovskĂ© obrazovce.

### 12.4 Modularita a budoucĂ­ funkce

NovĂ˝ modul nesmĂ­ automaticky pĹ™evzĂ­t kontrolu nad domovskou obrazovkou.

DomovskĂˇ obrazovka je uĹľivatelskĂˇ konfigurace.

### 12.5 SprĂˇva domĂˇcnosti

SprĂˇva domĂˇcnosti nemusĂ­ zabĂ­rat vĂ˝znamnĂ© mĂ­sto na hlavnĂ­ obrazovce.

MĹŻĹľe bĂ˝t dostupnĂˇ pĹ™es:

> âš™ď¸Ź Spravovat domĂˇcnost

---

## 13. HlavnĂ­ navigace

V0.01 pouĹľĂ­vĂˇ hlavnĂ­ navigaci:

**DomĹŻ | MazlĂ­ÄŤci | Krmiva | Historie**

### DomĹŻ

RychlĂ© akce, pĹ™ipomĂ­nky, poslednĂ­ aktivita a uĹľivatelem zvolenĂ© moduly.

### MazlĂ­ÄŤci

Seznam mazlĂ­ÄŤkĹŻ a jejich detail.

Detail mazlĂ­ÄŤka obsahuje:

- zĂˇkladnĂ­ Ăşdaje,
- historii krmenĂ­,
- hodnocenĂ­,
- statistiky.

### Krmiva

Seznam krmiv a jejich detail.

Detail krmiva obsahuje:

- zĂˇkladnĂ­ Ăşdaje,
- historii pouĹľitĂ­,
- hodnocenĂ­,
- statistiky podle mazlĂ­ÄŤkĹŻ.

### Historie

ChronologickĂ˝ pĹ™ehled udĂˇlostĂ­ s moĹľnostĂ­ filtrovĂˇnĂ­.

Statistiky nejsou samostatnou zĂˇloĹľkou.

---

## 14. VyhledĂˇvĂˇnĂ­ a rychlĂ˝ vĂ˝bÄ›r

### 14.1 MazlĂ­ÄŤci

PĹ™i malĂ©m poÄŤtu mazlĂ­ÄŤkĹŻ se zobrazujĂ­ jako pĹ™ehlednĂ© prvky, ideĂˇlnÄ› s fotografiĂ­ a krĂˇtkĂ˝m jmĂ©nem.

VyhledĂˇvĂˇnĂ­ se pouĹľije, pokud je poÄŤet poloĹľek dostateÄŤnÄ› velkĂ˝.

### 14.2 Krmiva

VyhledĂˇvĂˇnĂ­ musĂ­ bĂ˝t pĹ™ipraveno od zaÄŤĂˇtku.

VĂ˝bÄ›r krmiva prioritizuje:

1. naposledy pouĹľitĂ©,
2. ÄŤasto pouĹľĂ­vanĂ©,
3. ostatnĂ­ krmiva.

VyhledĂˇvĂˇnĂ­ pracuje minimĂˇlnÄ› s:

- znaÄŤkou,
- nĂˇzvem,
- variantou/pĹ™Ă­chutĂ­.

NapĹ™Ă­klad hledĂˇnĂ­:

> kuĹ™

mĹŻĹľe najĂ­t:

> Carnilove TaĹˇtiÄŤka kuĹ™ecĂ­.

### 14.3 NenĂ­ nutnĂ© ruÄŤnĂ­ oznaÄŤenĂ­ â€žoblĂ­benĂ©â€ś

Aplikace nemĂˇ vyĹľadovat ruÄŤnĂ­ oznaÄŤovĂˇnĂ­ krmiva jako oblĂ­benĂ©ho, pokud mĹŻĹľe vyuĹľĂ­t skuteÄŤnĂˇ data o pouĹľĂ­vĂˇnĂ­ a hodnocenĂ­.

BudoucĂ­ UI mĹŻĹľe zobrazovat:

- ÄŤasto pouĹľĂ­vanĂ©,
- nejlĂ©pe hodnocenĂ©.

---

## 15. OprĂˇvnÄ›nĂ­ a mazĂˇnĂ­ dat

### 15.1 MazĂˇnĂ­

Owner mĹŻĹľe mazat data domĂˇcnosti.

Admin mĹŻĹľe data deaktivovat, ale nemĹŻĹľe je trvale mazat.

User nemĹŻĹľe mazlĂ­ÄŤky ani krmiva mazat nebo deaktivovat.

### 15.2 Oprava

Oprava konkrĂ©tnĂ­ho Ăşdaje nesmĂ­ vyĹľadovat vytvoĹ™enĂ­ novĂ©ho zĂˇznamu.

### 15.3 Historie

Deaktivace mazlĂ­ÄŤka nebo krmiva nesmĂ­ odstranit historickĂˇ data.

---

## 16. NĂˇvrhy na zlepĹˇenĂ­

V rĂˇmci bety musĂ­ bĂ˝t v aplikaci viditelnĂˇ moĹľnost:

> **Navrhnout zlepĹˇenĂ­**

NemĂˇ bĂ˝t schovanĂˇ pouze ve sprĂˇvÄ› ĂşÄŤtu.

### 16.1 Kategorie

NĂˇvrh lze zaĹ™adit minimĂˇlnÄ› do kategoriĂ­:

- chyba / nefunguje,
- nĂˇvrh funkce,
- UX / vzhled,
- data / statistiky,
- pĹ™ipomĂ­nky,
- technickĂ˝ problĂ©m,
- jinĂ˝ nĂˇvrh.

### 16.2 Kontext nĂˇvrhu

Pokud je to technicky moĹľnĂ©, aplikace k nĂˇvrhu automaticky pĹ™ipojĂ­ relevantnĂ­ kontext, napĹ™Ă­klad:

- verzi aplikace,
- platformu,
- aktuĂˇlnĂ­ obrazovku.

UĹľivatel nemĂˇ tento kontext ruÄŤnÄ› vypisovat.

### 16.3 NPS

NPS je samostatnĂ˝ mechanismus od nĂˇvrhĹŻ na zlepĹˇenĂ­.

NemĂˇ se zobrazovat pĹ™i kaĹľdĂ©m pouĹľitĂ­ aplikace.

---

## 17. ĹĂ­zenĂˇ beta

PoÄŤĂˇteÄŤnĂ­ verze bude provozovĂˇna jako Ĺ™Ă­zenĂˇ beta.

SuperOwner mĹŻĹľe schvalovat novĂ© uĹľivatele.

Beta musĂ­ umoĹľnit:

- kontrolovanĂ˝ vstup uĹľivatelĹŻ,
- testovĂˇnĂ­ vĂ­ce domĂˇcnostĂ­,
- sbÄ›r nĂˇvrhĹŻ na zlepĹˇenĂ­,
- pĹ™Ă­padnÄ› NPS,
- sprĂˇvu problĂ©movĂ˝ch ĂşÄŤtĹŻ.

SuperOwner nenĂ­ bÄ›ĹľnĂˇ role ÄŤlena domĂˇcnosti.

---

## 18. Offline reĹľim

ZĂˇkladnĂ­ zĂˇznam krmenĂ­ by mÄ›l bĂ˝t moĹľnĂ© vytvoĹ™it i bez aktuĂˇlnĂ­ho pĹ™ipojenĂ­ k internetu.

Pokud je zaĹ™Ă­zenĂ­ offline:

1. zĂˇznam se uloĹľĂ­ lokĂˇlnÄ›,
2. zachovĂˇ se ÄŤas udĂˇlosti,
3. zĂˇznam se oznaÄŤĂ­ jako ÄŤekajĂ­cĂ­ na synchronizaci,
4. po obnovenĂ­ pĹ™ipojenĂ­ se synchronizuje.

PlnohodnotnĂˇ offline synchronizace nenĂ­ dĹŻvodem pro zbyteÄŤnĂ© komplikovĂˇnĂ­ v0.01.

Priorita:

1. perfektnĂ­ online workflow,
2. zĂˇkladnĂ­ offline zĂˇpis,
3. pokroÄŤilĂˇ synchronizace podle technickĂ© nĂˇroÄŤnosti.

---

## 19. BezpeÄŤnost a soukromĂ­

Data jednotlivĂ˝ch domĂˇcnostĂ­ musĂ­ bĂ˝t navzĂˇjem oddÄ›lena.

UĹľivatel nesmĂ­ mĂ­t moĹľnost pĹ™istupovat k datĹŻm jinĂ© domĂˇcnosti pouze zmÄ›nou ĂşdajĹŻ v klientovi.

OprĂˇvnÄ›nĂ­ musĂ­ bĂ˝t ovÄ›Ĺ™ovĂˇna na serverovĂ© stranÄ›.

PĹ™ihlĂˇĹˇenĂ­ a autentizace musĂ­ pouĹľĂ­vat bezpeÄŤnĂ˝ mechanismus.

Hesla nesmĂ­ bĂ˝t aplikacĂ­ uklĂˇdĂˇna v ÄŤitelnĂ© podobÄ›.

Komunikace se serverem musĂ­ pouĹľĂ­vat HTTPS.

---

## 20. Data patĹ™Ă­ mazlĂ­ÄŤkĹŻm

Filozofie projektu:

> **Data patĹ™Ă­ mazlĂ­ÄŤkĹŻm.**

Aplikace je jejich sprĂˇvce.

Data nesmĂ­ bĂ˝t zbyteÄŤnÄ› svĂˇzĂˇna s konkrĂ©tnĂ­m UI.

DlouhodobÄ› musĂ­ existovat moĹľnost data exportovat.

Odchod uĹľivatele z domĂˇcnosti nesmĂ­ automaticky znamenat odstranÄ›nĂ­ historickĂ˝ch dat domĂˇcnosti.

---

## 21. BudoucĂ­ rozĹˇĂ­Ĺ™enĂ­

Architektura v0.01 musĂ­ umoĹľnit budoucĂ­ pĹ™idĂˇnĂ­ dalĹˇĂ­ch oblastĂ­, aniĹľ by bylo nutnĂ© pĹ™episovat zĂˇkladnĂ­ model krmenĂ­.

PlĂˇnovanĂ© oblasti:

- zdravĂ­,
- lĂ©ky,
- toaleta,
- aktivita,
- mazlenĂ­,
- pitnĂ˝ reĹľim,
- dalĹˇĂ­ typy udĂˇlostĂ­,
- pokroÄŤilĂ© pĹ™ipomĂ­nky,
- automatickĂˇ detekce odchylek,
- grafy,
- AI analĂ˝za,
- nĂˇkupy,
- Ăştulky,
- dalĹˇĂ­ druhy mazlĂ­ÄŤkĹŻ.

### 21.1 PitnĂ˝ reĹľim

BudoucĂ­ modul mĹŻĹľe evidovat napĹ™Ă­klad:

- ÄŤiĹˇtÄ›nĂ­ fontĂˇnek,
- doplĹovĂˇnĂ­ vody,
- vĂ˝mÄ›nu vody,
- pozorovĂˇnĂ­ zvĂ˝ĹˇenĂ©ho nebo snĂ­ĹľenĂ©ho pitĂ­,
- pĹ™Ă­padnÄ› skuteÄŤnĂˇ mÄ›Ĺ™enĂ­ spotĹ™eby.

Aplikace nesmĂ­ automaticky tvrdit, kolik konkrĂ©tnĂ­ koÄŤka vypila, pokud to nebylo skuteÄŤnÄ› zmÄ›Ĺ™eno.

### 21.2 AutomatickĂˇ detekce odchylek

BudoucĂ­ systĂ©m mĹŻĹľe upozornit uĹľivatele na vĂ˝znamnou zmÄ›nu v chovĂˇnĂ­.

PĹ™Ă­klad:

> â€žTerry za poslednĂ­ mÄ›sĂ­c zvracela 10Ă—.â€ś

Tento typ upozornÄ›nĂ­ je urÄŤen pĹ™edevĹˇĂ­m pro uĹľivatele, kterĂ˝ sĂˇm aktivnÄ› neprochĂˇzĂ­ statistiky.

---

## 22. Mimo rozsah v0.01

NĂˇsledujĂ­cĂ­ vÄ›ci se v0.01 neimplementujĂ­:

- zdravotnĂ­ modul,
- lĂ©ky,
- toaleta,
- aktivita,
- mazlenĂ­,
- pitnĂ˝ reĹľim,
- nĂˇkupnĂ­ systĂ©m,
- sklad,
- AI,
- automatickĂˇ zdravotnĂ­ interpretace,
- grafy,
- ĂştulkovĂ˝ reĹľim,
- plnĂˇ podpora psĹŻ,
- externĂ­ databĂˇze krmiv,
- OCR,
- veĹ™ejnĂˇ databĂˇze uĹľivatelĹŻ.

Tyto oblasti mohou bĂ˝t pĹ™edmÄ›tem budoucĂ­ roadmapy.

---

## 23. KritĂ©rium ĂşspÄ›chu v0.01

v0.01 je ĂşspÄ›ĹˇnĂˇ, pokud uĹľivatel dokĂˇĹľe skuteÄŤnĂ© kaĹľdodennĂ­ krmenĂ­ zadat:

- rychleji neĹľ do Excelu,
- s menĹˇĂ­m poÄŤtem rozhodnutĂ­,
- bez zbyteÄŤnĂ˝ch krokĹŻ,
- pohodlnÄ› na malĂ© obrazovce,
- a zĂˇroveĹ vytvoĹ™Ă­ data dostateÄŤnÄ› kvalitnĂ­ pro pozdÄ›jĹˇĂ­ statistiky a rozĹˇĂ­Ĺ™enĂ­ aplikace.

ZĂˇkladnĂ­ bÄ›ĹľnĂ˝ scĂ©nĂˇĹ™ musĂ­ bĂ˝t pĹ™ibliĹľnÄ›:

1. otevĹ™Ă­t **+ NovĂ© krmenĂ­**,
2. dostat pĹ™edvyplnÄ›nĂ˝ preferovanĂ˝ reĹľim,
3. pouĹľĂ­t pĹ™edvyplnÄ›nĂ© hodnoty,
4. pĹ™Ă­padnÄ› upravit mazlĂ­ÄŤky, krmivo nebo mnoĹľstvĂ­,
5. uloĹľit,
6. pĹ™Ă­padnÄ› ihned nebo pozdÄ›ji zadat hodnocenĂ­.

Aplikace nesmĂ­ bĂ˝t navrĹľena jako mobilnĂ­ kopie Excelu.

JejĂ­m cĂ­lem je **rychlĂˇ evidence skuteÄŤnĂ©ho Ĺľivota domĂˇcnosti s mazlĂ­ÄŤky**.
