import urllib.request
from lxml import html

url_base = "https://www.successories.com/iquote/author/99/albert-einstein-quotes/"

with open("einsteinquotes.txt","w") as file:
	for i in range(1,26):
		url = url_base + str(i)
		page_raw = urllib.request.urlopen(url).read()
		page = html.fromstring(page_raw)
		for quote in page.xpath('//div[@class="quote"]'):
			#print(quote.text)
			file.write(quote.text + "\n")
