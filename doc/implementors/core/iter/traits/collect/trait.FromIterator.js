(function() {var implementors = {};
implementors["boa"] = [{"text":"impl FromIterator&lt;FunctionFlags&gt; for FunctionFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;Attribute&gt; for Attribute","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;RegExpFlags&gt; for RegExpFlags","synthetic":false,"types":[]}];
implementors["boa_tester"] = [{"text":"impl FromIterator&lt;TestFlags&gt; for TestFlags","synthetic":false,"types":[]}];
implementors["git2"] = [{"text":"impl FromIterator&lt;Sort&gt; for Sort","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;CredentialType&gt; for CredentialType","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;IndexEntryFlag&gt; for IndexEntryFlag","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;IndexEntryExtendedFlag&gt; for IndexEntryExtendedFlag","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;IndexAddOption&gt; for IndexAddOption","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;RepositoryOpenFlags&gt; for RepositoryOpenFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;RevparseMode&gt; for RevparseMode","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;MergeAnalysis&gt; for MergeAnalysis","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;MergePreference&gt; for MergePreference","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;Status&gt; for Status","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;RepositoryInitMode&gt; for RepositoryInitMode","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;SubmoduleStatus&gt; for SubmoduleStatus","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;PathspecFlags&gt; for PathspecFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;CheckoutNotificationType&gt; for CheckoutNotificationType","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;DiffStatsFormat&gt; for DiffStatsFormat","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;StashApplyFlags&gt; for StashApplyFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;StashFlags&gt; for StashFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;AttrCheckFlags&gt; for AttrCheckFlags","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;DiffFlags&gt; for DiffFlags","synthetic":false,"types":[]}];
implementors["hashbrown"] = [{"text":"impl&lt;K, V, S&gt; FromIterator&lt;(K, V)&gt; for HashMap&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, S&gt; FromIterator&lt;T&gt; for HashSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Eq + Hash,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["indexmap"] = [{"text":"impl&lt;K, V, S&gt; FromIterator&lt;(K, V)&gt; for IndexMap&lt;K, V, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Hash + Eq,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, S&gt; FromIterator&lt;T&gt; for IndexSet&lt;T, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Hash + Eq,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: BuildHasher + Default,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["linked_hash_map"] = [{"text":"impl&lt;K:&nbsp;Hash + Eq, V, S:&nbsp;BuildHasher + Default&gt; FromIterator&lt;(K, V)&gt; for LinkedHashMap&lt;K, V, S&gt;","synthetic":false,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl FromIterator&lt;TokenTree&gt; for TokenStream","synthetic":false,"types":[]},{"text":"impl FromIterator&lt;TokenStream&gt; for TokenStream","synthetic":false,"types":[]}];
implementors["serde_json"] = [{"text":"impl FromIterator&lt;(String, Value)&gt; for Map&lt;String, Value&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Into&lt;Value&gt;&gt; FromIterator&lt;T&gt; for Value","synthetic":false,"types":[]}];
implementors["serde_yaml"] = [{"text":"impl FromIterator&lt;(Value, Value)&gt; for Mapping","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Into&lt;Value&gt;&gt; FromIterator&lt;T&gt; for Value","synthetic":false,"types":[]}];
implementors["syn"] = [{"text":"impl&lt;T, P&gt; FromIterator&lt;T&gt; for Punctuated&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Default,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T, P&gt; FromIterator&lt;Pair&lt;T, P&gt;&gt; for Punctuated&lt;T, P&gt;","synthetic":false,"types":[]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;Array + Default&gt; FromIterator&lt;&lt;A as Array&gt;::Item&gt; for ArrayVec&lt;A&gt;","synthetic":false,"types":[]},{"text":"impl&lt;A:&nbsp;Array + Default&gt; FromIterator&lt;&lt;A as Array&gt;::Item&gt; for TinyVec&lt;A&gt;","synthetic":false,"types":[]}];
implementors["vec_map"] = [{"text":"impl&lt;V&gt; FromIterator&lt;(usize, V)&gt; for VecMap&lt;V&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()