

/**
 * Trie trie = new Trie();
		trie.insert("apple");
		trie.search("apple");   // return True
		trie.search("app");     // return False
		trie.startsWith("app"); // return True
		trie.insert("app");
		trie.search("app");     // return True
 */

var Trie = function () {
	this.children = {};
	this.isEnd = false;
};

/** 
 * @param {string} word
 * @return {void}
 */

Trie.prototype.insert = function (word) {
	let node = this;
	for(let char of word){
		if(!node.children[char]){
			node.children[char] = {
				children: {},
				isEnd: false
			}
		}
		node = node.children[char]
	}
	node.isEnd = true;
	// console.log(JSON.stringify(this.children));
	// console.log(JSON.stringify(node));
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
	let node = this;
	for(let char of word){
		if(!node.children[char]){
			return false;
		}
		node = node.children[char];
	}
	return node.isEnd;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
	let node = this;
	for(let char of prefix){
		if(!node.children[char]){
			return false;
		}
		node = node.children[char];
	}
	return true;
};


Trie.prototype.print = function () {
	// 取出所有子节点的字符（键），用来判断谁是"最后一个"，好画 └ 还是 ├
	const walk = (node, prefix) => {
		const chars = Object.keys(node.children);
		chars.forEach((char, i) => {
			// 是不是这一层的最后一个分支？最后一个用 └，其余用 ├
			const isLast = i === chars.length - 1;
			const child = node.children[char];
			// 如果这个字符是某个单词的结尾，标个 ● 让它显眼
			const endMark = child.isEnd ? ' ●' : '';
			// 画出当前这一行：前缀 + 分支符号 + 字符 + 结尾标记
			console.log(prefix + (isLast ? '└─ ' : '├─ ') + char + endMark);
			// 往下递归。给子节点的前缀续上：
			// 如果当前是最后一个，下面用空格占位；否则用竖线 │ 把分支延续下去
			walk(child, prefix + (isLast ? '    ' : '│   '));
		});
	};
	console.log('(root)');
	walk(this, '');
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

var obj = new Trie()
obj.insert('apple')
obj.insert('apply');
obj.insert('apppay');
obj.print()
obj.insert('lulu');
obj.insert('lululemon');
obj.insert('lulupeach');
obj.print()
