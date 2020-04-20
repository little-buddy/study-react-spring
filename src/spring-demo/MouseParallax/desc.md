# MouseParallax

### 生成假的文章
```text
	lorem-ipsum 是一个西方具有历史的 生成假文 工具
	文本生成器

loremIpsum 直接生成器
	count								生成的 单位数
	units								words/sentences/paragraphs
	format							html/plain 格式，html就是plain格式外包了一层 p
	paragraphLowerBound 每个段落最小句子数
	paragraphUpperBound 每个段落最大句子数
	
	random							一个随机函数
	sentenceLowerBound  每个句子最小的字符数
	sentenceUpperBound  每个句子最大的字符数
	
	suffix							\n \n\r win32
	words								扩展单词的数组
	
LoremIpsum 构造生成器
	sentencesPerParagraph {min,max}
	wordsPerSentence {min,max}	
	random
	seed
	words
```
