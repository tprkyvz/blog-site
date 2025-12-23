---
title: 'Nmap NSE Scriptleri: Tam Kılavuz'
date: '2025-12-23'
description: 'Nmap Scripting Engine (NSE) nedir, nasıl kullanılır ve güvenlik testlerinizde nasıl fark yaratır? Detaylı bir inceleme.'
tags: ['siber']
---

Nmap, ağ tarama dünyasının İsviçre çakısıdır ve bu gücünün büyük bir kısmını **Nmap Scripting Engine (NSE)** yapısından alır. Bu yazıda, NSE scriptlerinin ne olduğunu, nasıl kullanıldığını ve siber güvenlik testlerinizde işinizi nasıl kolaylaştıracağını inceleyeceğiz.

## NSE Scriptleri Nedir?

NSE scriptleri, Nmap'in yeteneklerini basit port taramasının çok ötesine taşıyan, **Lua** programlama dili ile yazılmış güçlü eklentilerdir. Bu scriptler sayesinde Nmap şunları yapabilir:

- **Gelişmiş Versiyon Tespiti:** Servislerin sadece adını değil, tam versiyonlarını ve yapılandırmalarını öğrenebilirsiniz.
- **Zafiyet Taraması:** Hedef sistemlerdeki bilinen güvenlik açıklarını kontrol edebilirsiniz.
- **Backdoor Tespiti:** Bir sisteme sızan zararlı yazılımların bıraktığı izleri arayabilirsiniz.
- **Brute Force:** Zayıf parolaları tespit etmek için servisleri test edebilirsiniz.

## Script Kategorileri

NSE scriptleri işlevlerine ve güvenli olup olmadıklarına göre kategorize edilir. En yaygın iki ayrım şöyledir:

1.  **Safe (Güvenli):** Bu scriptler hedef sisteme zarar vermez, yoğun trafik oluşturmaz ve genellikle bilgi toplama amaçlıdır. Gönül rahatlığıyla kullanabilirsiniz.
2.  **Intrusive (Saldırgan):** Bu kategorideki scriptler hedef servisi çökertebilir, aşırı kaynak tüketebilir veya sistem yöneticileri tarafından saldırı olarak algılanabilir.

> [!WARNING]
> Hedef sistemi veya ağ üzerindeki etkisini tam olarak anlamadan, özellikle "intrusive" kategorisindeki scriptleri çalıştırmaktan kaçının.

## NSE Scriptleri Nasıl Kullanılır?

Nmap'te scriptleri çalıştırmak için `--script` parametresi kullanılır.

**Tek bir script çalıştırmak için:**

```bash
nmap --script=http-fileupload-exploiter <hedef_ip>
```

**Birden fazla scripti çalıştırmak için (virgül ile ayırarak):**

```bash
nmap --script=smb-enum-users,smb-enum-shares <hedef_ip>
```

**Kategoriye göre çalıştırmak için:**
Örneğin sadece güvenli scriptleri çalıştırmak isterseniz:

```bash
nmap --script=safe <hedef_ip>
```

### Script Argümanları

Bazı scriptler çalışmak için ek bilgiye ihtiyaç duyar. Örneğin bir dosya yükleme zafiyetini test ediyorsanız, hangi dosyayı nereye yükleyeceğini belirtmelisiniz. Bunun için `--script-args` parametresi kullanılır.

Örnek (HTTP PUT metodu ile dosya yükleme):

```bash
nmap -p 80 --script http-put --script-args http-put.url='/dav/shell.php',http-put.file='./shell.php' <hedef_ip>
```

## Scriptleri Nasıl Buluruz?

Binlerce NSE scripti arasında ihtiyacınız olanı bulmak için iki ana yöntem vardır.

### 1. Resmi Dokümantasyon
Nmap'in kendi web sitesindeki [NSE Dokümantasyon Sayfası](https://nmap.org/nsedoc/), tüm resmi scriptlerin listesini, ne işe yaradıklarını ve nasıl kullanılacaklarını detaylıca açıklar.

### 2. Yerel Depo (`/usr/share/nmap/scripts`)
Linux sistemlerde Nmap yüklendiğinde, scriptler genellikle `/usr/share/nmap/scripts` dizininde saklanır.

`script.db` dosyası, scriptlerin listesini ve kategorilerini tutan bir metin dosyasıdır (gerçek bir veritabanı değildir).

![Script DB Dosyası](/images/nmap/script-db-head.png)

İçinde basitçe arama yapabilirsiniz:

```bash
grep "ftp" /usr/share/nmap/scripts/script.db
```

![Grep ile Arama](/images/nmap/grep-search.png)

Veya daha basiti, `ls` komutu ile dosya isimlerinde arama yapabilirsiniz:

```bash
ls -l /usr/share/nmap/scripts/*ftp*
```

![Ls ile Arama](/images/nmap/ls-search.png)

### 3. Script Veritabanını Güncelleme

Nmap scriptleri sürekli güncellenir. Yeni zafiyetler çıktığında, topluluk tarafından yazılan scriptleri sisteminize dahil etmek için veritabanını güncellemeniz gerekir. Bunu şu komutla yapabilirsiniz:

```bash
sudo nmap --script-updatedb
```

## Sonuç

NSE, Nmap'i basit bir port tarayıcıdan kapsamlı bir güvenlik denetim aracına dönüştürür. Doğru scriptleri doğru zamanda kullanarak, sızma testlerinizde veya ağ yönetiminizde büyük zaman kazanabilir ve gözden kaçabilecek detayları yakalayabilirsiniz.

Unutmayın; güç sorumluluk getirir. "Intrusive" scriptleri sadece yetkiniz olan sistemlerde kullanın!
